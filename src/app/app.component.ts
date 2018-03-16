import { Component } from '@angular/core';
import { AutorizacionService } from './services/autorizacion.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public loggedIn:boolean = false;
  public loggedUser:any = null;

  constructor(private _autorizacionService:AutorizacionService, private _router:Router) {
      this._autorizacionService.isLogged().subscribe(
        result => {
          console.log(result);
          if (result && result.uid) {
            this.loggedIn = true;
            setTimeout(()=>{
              this.loggedUser = this._autorizacionService.getUser().currentUser.email;
            },500)
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
