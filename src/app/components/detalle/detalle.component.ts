import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../../services/lugares.service';

@Component({
  selector: 'detalle',
  templateUrl: './detalle.component.html',
})
export class DetalleComponent {
    public id:number;
    public lugar:any;
    public lugares: any;

    constructor(private _route:ActivatedRoute, private _lugaresService:LugaresService) {
      this.id = this._route.snapshot.params['id'];
      this.lugares = this._lugaresService.getLugares()
      //.valueChanges()
      .subscribe(lugares => {
        console.log(lugares.json());
        this.lugares = lugares.json();
      });
      this.lugar = this._lugaresService.buscarLugar(this.id);
    }


}
