import {Injectable} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database/database';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LugaresService {
  public lugares: any;
  public API_ENDPOINT:string = 'https://platzisquare-df534.firebaseio.com';
  public headers:Headers = new Headers({"Content-Type":"application/json"});

  constructor(private _afDB:AngularFireDatabase, private _http:Http) {

  }

  public getLugares() {
    //return this._afDB.list('lugares/');
    return this._http.get(this.API_ENDPOINT+'/.json')
    .map((resultado) => {
        return resultado.json().lugares;
      });
  }

  public getLugar(id:number) {
    return this._afDB.object('lugares/'+id);
  }

  public buscarLugar(id:number) {
    return this.lugares.filter(lugar => { return lugar.id == id })[0] || null;
  }

  public guardarLugar(lugar:any) {
    //this._afDB.database.ref('lugares/'+lugar.id).set(lugar);

    return this._http.post(this.API_ENDPOINT+'/lugares.json',lugar,{headers:this.headers});
  }

  public editarLugar(lugar:any) {
    this._afDB.database.ref('lugares/'+lugar.id).set(lugar);
  }

  public obtenerGeoData(direccion) {
    return this._http.get('https://maps.google.com/maps/api/geocode/json?address='+direccion+'&key=AIzaSyA3GGV-O_vrweaT7J_i-jKDRikYPki11rQ');
  }
}
