import {Injectable} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database/database';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AutorizacionService } from './autorizacion.service';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class MyGuard implements CanActivate {
  public loggedIn:boolean = false;

  constructor(private _autorizacionService:AutorizacionService) {
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

  canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.loggedIn;
    }
}
