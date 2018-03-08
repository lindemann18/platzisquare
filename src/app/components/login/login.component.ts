import { Component } from '@angular/core';
import { AutorizacionService } from '../../services/autorizacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(private _autorizacionService:AutorizacionService) { }

  ngOnInit() {
    console.log(this._autorizacionService.Login('a','a'));
  }

}
