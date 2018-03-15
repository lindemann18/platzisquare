import {Injectable} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database/database';
import { AngularFireAuth } from 'angularfire2/auth/auth';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AutorizacionService {
  constructor(private _angularFireAuth: AngularFireAuth) {
    console.log(_angularFireAuth);
  }
  public Login(email, pass) {
    this._angularFireAuth.auth.signInWithEmailAndPassword(email,pass).then(
      response => {
        console.log(response);
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
}
