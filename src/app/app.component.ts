import { Component } from '@angular/core';
import { AutorizacionService } from './services/autorizacion.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public loggedIn:boolean = false;

  constructor(private _autorizacionService:AutorizacionService, private _router:Router) {
      this._autorizacionService.isLogged().subscribe(
        result => {
          console.log(result);
          if (result && result.uid) {
            this.loggedIn = true;
          }else {this.loggedIn = false;}
        },
        error => {
          this.loggedIn = false;
        }
      )
  }

  logout() {
    this._autorizacionService.logout();
    this._router.navigateByUrl('/lugares');
  }
}
