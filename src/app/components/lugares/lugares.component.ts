import { Component } from '@angular/core';
import { LugaresService } from '../../services/lugares.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'lugares',
  templateUrl: './lugares.component.html',
  styleUrls:['./lugares.component.css'],
  animations: [
    trigger('contenedorAnimable', [
      state('inicial', style({
        opacity: 0,
        //backgroundColor: 'green',
        //transform: 'rotate3d(0,0,0,0deg)',
      })),
        state('final', style({
          opacity: 1,
          //backgroundColor: 'yellow',
          //transform: 'rotate3d(5,10,20,30deg)'
        })),
        transition('inicial => final', animate(1000)),
        transition('final => inicial', animate(650)),
    ])
  ],
})
export class LugaresComponent {
    public lat: number = 24.7828658;
    public lng: number = -107.400825;
    public lugares:any;
    public state:string = 'inicial';

    animar() {
      this.state = (this.state==='final')?'inicial':'final';
    }

    animacionInicial(e) {
      console.log("inicio");
    }

    animacionTerminal(e) {
      console.log("terminado");
    }
    constructor(private _lugaresService:LugaresService) {
      this._lugaresService.getLugares()
      //.valueChanges()
      .subscribe(
        lugares => {
            this.lugares = Object.keys(lugares).map(function(key){return lugares[key]});
            console.log(this.lugares);
            this.state = 'final';
        },
        error => {
          console.log(error);
          alert("tenemos dificultades disculpen las molestias");
        }
      );
    }
}
