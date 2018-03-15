import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from '../../services/autorizacion.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public registro:any = {};

  constructor(private _autorizacionService:AutorizacionService) { }

  ngOnInit() {
  }

  registrar() {
    this._autorizacionService.Registro(this.registro.email,this.registro.password);
  }

}
