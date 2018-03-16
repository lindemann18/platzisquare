import {Injectable} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database/database';
import { AngularFireAuth } from 'angularfire2/auth/auth';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router'

@Injectable()
export class AutorizacionService {
  constructor(private _angularFireAuth: AngularFireAuth, private _router:Router) {
    console.log(_angularFireAuth);
    this.isLogged();
  }
  public Login(email, pass) {
    this._angularFireAuth.auth.signInWithEmailAndPassword(email,pass).then(
      response => {
        console.log(response);
        this._router.navigateByUrl('/lugares');
      })
      .catch(
        error => {
          console.log(error);
        }
      )
  }

  public Registro(email, pass) {
    this._angularFireAuth.auth.createUserWithEmailAndPassword(email,pass).then(
      response => {
        console.log(response);
      })
      .catch(
        error => {
          console.log(error);
        }
      )
  }

  public isLogged() {
    return this._angularFireAuth.authState;
  }

  public logout() {
    this._angularFireAuth.auth.signOut();
  }

  public getUser() {
    return this._angularFireAuth.auth;
  }
}
