import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { DetalleComponent } from './components/detalle/detalle.component';
import { LugaresComponent } from './components/lugares/lugares.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CrearComponent } from './components/crear/crear.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LugaresService } from './services/lugares.service';
import { AutorizacionService } from './services/autorizacion.service';
import { LinkPipe } from './pipes/link.pipe';

// fire base
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AgmCoreModule } from '@agm/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes:Routes = [
  {path:'', component:LugaresComponent},
  {path:'lugares', component:LugaresComponent},
  {path:'detalle/:id', component:DetalleComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'crear/:id', component:CrearComponent},
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegistroComponent},
];

export const firebaseConfig = {
  apiKey: "AIzaSyAEa_j_MtbtXikE3r5YgG03kTSaDQ3HCiU",
  authDomain: "platzisquare-df534.firebaseapp.com",
  databaseURL: "https://platzisquare-df534.firebaseio.com",
  projectId: "platzisquare-df534",
  storageBucket: "platzisquare-df534.appspot.com",
  messagingSenderId: '712945022723'
};

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent,
    LinkPipe,
    LoginComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA3GGV-O_vrweaT7J_i-jKDRikYPki11rQ'
    }),
  ],
  providers: [LugaresService, AutorizacionService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
