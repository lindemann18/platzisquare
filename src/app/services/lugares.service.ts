import {Injectable} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database/database';
import { Http } from '@angular/http';

@Injectable()
export class LugaresService {
  public lugares: any = [
    {id:1, plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre:'Florería la Gardenia', descripcion: 'something'},
    {id:2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre:'Donas la pasadita', descripcion: 'something'},
    {id:3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre:'Veterinaria Huellitas Felices', descripcion: 'something'},
    {id:4, plan: 'gratuito', cercania: 3, distancia: 10, active: false, nombre:'Sushi Suhiroll', descripcion: 'something'},
    {id:5, plan: 'pagado', cercania: 3, distancia: 35, active: true, nombre:'Hotel la Gracia', descripcion: 'something'},
    {id:6, plan: 'gratuito', cercania: 3, distancia: 120, active: true, nombre:'Zapatería el Clavo', descripcion: 'something'},
  ];

  constructor(private _afDB:AngularFireDatabase, private _http:Http) {

  }

  public getLugares() {
    return this._afDB.list('lugares/');
  }

  public getLugar(id:number) {
    return this._afDB.object('lugares/'+id);
  }

  public buscarLugar(id:number) {
    return this.lugares.filter(lugar => { return lugar.id == id })[0] || null;
  }

  public guardarLugar(lugar:any) {
    this._afDB.database.ref('lugares/'+lugar.id).set(lugar);
  }

  public editarLugar(lugar:any) {
    this._afDB.database.ref('lugares/'+lugar.id).set(lugar);
  }

  public obtenerGeoData(direccion) {
    return this._http.get('https://maps.google.com/maps/api/geocode/json?address='+direccion+'&key=AIzaSyA3GGV-O_vrweaT7J_i-jKDRikYPki11rQ');
  }
}
