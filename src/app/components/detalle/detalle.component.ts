import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'detalle',
  templateUrl: './detalle.component.html',
})
export class DetalleComponent {
    public id:number;
    public lugar:any;
    public lugares: any = [
      {id:1, plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre:'Florería la Gardenia', descripcion: 'something'},
      {id:2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre:'Donas la pasadita', descripcion: 'something'},
      {id:3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre:'Veterinaria Huellitas Felices', descripcion: 'something'},
      {id:4, plan: 'gratuito', cercania: 3, distancia: 10, active: false, nombre:'Sushi Suhiroll', descripcion: 'something'},
      {id:5, plan: 'pagado', cercania: 3, distancia: 35, active: true, nombre:'Hotel la Gracia', descripcion: 'something'},
      {id:6, plan: 'gratuito', cercania: 3, distancia: 120, active: false, nombre:'Zapatería el Clavo', descripcion: 'something'},
    ];

    constructor(private _route:ActivatedRoute) {
      this.id = this._route.snapshot.params['id'];
      this.lugar = this.buscarLugar();
    }

    buscarLugar():Array<any> {
        return this.lugares.filter(lugar => { return lugar.id == this.id })[0] || null;
    }
}
