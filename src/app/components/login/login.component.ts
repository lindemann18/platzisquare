import { Component } from '@angular/core';
import { AutorizacionService } from '../../services/autorizacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  public loginData:any = {};

  constructor(private _autorizacionService:AutorizacionService) { }

  ngOnInit() {
    console.log();
  }

  login(){
    this._autorizacionService.Login(this.loginData.email,this.loginData.password)
  }
}
