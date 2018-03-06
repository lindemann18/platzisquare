import { Component } from '@angular/core';

@Component({
  selector: 'lugares',
  templateUrl: './lugares.component.html',
  styleUrls:['./lugares.component.css']
})
export class LugaresComponent {
    public lat: number = 24.7828658;
    public lng: number = -107.400825;

    lugares: any = [
      {id:1, plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre:'Florería la Gardenia'},
      {id:2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre:'Donas la pasadita'},
      {id:3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre:'Veterinaria Huellitas Felices'},
      {id:4, plan: 'gratuito', cercania: 3, distancia: 10, active: false, nombre:'Sushi Suhiroll'},
      {id:5, plan: 'pagado', cercania: 3, distancia: 35, active: true, nombre:'Hotel la Gracia'},
      {id:6, plan: 'gratuito', cercania: 3, distancia: 120, active: false, nombre:'Zapatería el Clavo'},
    ];
}
