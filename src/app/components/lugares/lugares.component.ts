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
      this._lugaresService.getLugares().valueChanges().subscribe(lugares => {
        console.log(lugares)
        this.lugares = lugares;
    });
    }
}
