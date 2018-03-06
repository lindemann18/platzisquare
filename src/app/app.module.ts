import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { DetalleComponent } from './components/detalle/detalle.component';
import { LugaresComponent } from './components/lugares/lugares.component';

import { AgmCoreModule } from '@agm/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes:Routes = [
  {path:'', component:LugaresComponent},
  {path:'lugares', component:LugaresComponent},
  {path:'detalle/:id', component:DetalleComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBdLnWLRYB1uOs1ajfu3XpBN6CcNKW2X5g'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
