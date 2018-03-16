import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../../services/lugares.service';
import { Http, Headers } from '@angular/http';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'crear',
  templateUrl: './crear.component.html',
})
export class CrearComponent {
  public lugar:any = {};
  public id:any;
  private searchField: FormControl;
  public results$: Observable<any>; // para crear un stream de observables, la convensión es terminar la variable con símbolo de dolaar
  public key:string = 'AIzaSyA3GGV-O_vrweaT7J_i-jKDRikYPki11rQ';

  constructor(private _lugaresService:LugaresService, private _route:ActivatedRoute, private _http:Http) {
    this.id = this._route.snapshot.params['id'];
    const URL = 'https://maps.google.com/maps/api/geocode/json';
    this.searchField = new FormControl();
    this.results$ = this.searchField.valueChanges
    .debounceTime(500)
    .switchMap(query =>{
      console.log(query);
      if(query!=="") {
          return this._http.get(`${URL}?address=${query}&key=${this.key}`)
      }
    })
    .map(response => response.json())
    .map(response => response.results);

    if(this.id != 'new') {
      this._lugaresService.getLugar(this.id).valueChanges()
      .subscribe(lugar=>this.lugar = lugar)
    }
  }

  guardarLugar() {
    const direccion = this.lugar.calle+','+this.lugar.ciudad+','+this.lugar.pais;
    this._lugaresService.obtenerGeoData(direccion).subscribe(
      response => {
        this.lugar.lat = response.json().results[0].geometry.location.lat;
        this.lugar.lng = response.json().results[0].geometry.location.lng;


        if(this.id=='new') {
            this.lugar.id = Date.now();
            this._lugaresService.guardarLugar(this.lugar);
            this.lugar = {};
        }else {
          this._lugaresService.editarLugar(this.lugar);
        }


      }
    );
  }

  seleccionarDireccion(result) {
    this.lugar.calle = result.address_components[1].long_name+" "+result.address_components[0].long_name;
    this.lugar.ciudad = result.address_components[4].long_name;
    this.lugar.pais = result.address_components[6].long_name;
  }
}
