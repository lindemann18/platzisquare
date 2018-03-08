import {Injectable} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database/database';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AutorizacionService {
  public Login(email, pass) {
    console.log('login');
  }

  public Registro(email, pass) {
    console.log('registro');
  }
}
