import { Component } from '@angular/core';
import { LugaresService } from '../../services/lugares.service';

@Component({
  selector: 'lugares',
  templateUrl: './lugares.component.html',
  styleUrls:['./lugares.component.css']
})
export class LugaresComponent {
    public lat: number = 24.7828658;
    public lng: number = -107.400825;
    public lugares:any;
    constructor(private _lugaresService:LugaresService) {
      this._lugaresService.getLugares()
      //.valueChanges()
      .subscribe(
        lugares => {
            this.lugares = Object.keys(lugares).map(function(key){return lugares[key]});
            console.log(this.lugares);
        },
        error => {
          console.log(error);
          alert("tenemos dificultades disculpen las molestias");
        }
      );
    }
}
