import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'detalle',
  templateUrl: './detalle.component.html',
})
export class DetalleComponent {
    constructor(private _route:ActivatedRoute) {
      console.log(this._route.snapshot.params['id']);
      console.log(this._route.snapshot.queryParams['action']);
    }
}
