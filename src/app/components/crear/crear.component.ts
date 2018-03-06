import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../../services/lugares.service';

@Component({
  selector: 'crear',
  templateUrl: './crear.component.html',
})
export class CrearComponent {
  public lugar:any = {};
  public id:any;

  constructor(private _lugaresService:LugaresService, private _route:ActivatedRoute) {
    this.id = this._route.snapshot.params['id'];
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


        if(this.id!='new') {
            this._lugaresService.guardarLugar(this.lugar);
        }else {
          this.lugar.id = Date.now();
          this._lugaresService.editarLugar(this.lugar);
          this.lugar = {};
        }


      }
    );
  }
}
