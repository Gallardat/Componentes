import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PracticasComponent } from './practicas/practicas.component';
import { EmetComponent } from './emet/emet.component';
import { MetodosComponent } from './metodos/metodos.component';
import { QueenComponent } from './queen/queen.component';
import { EventosComponent } from './eventos/eventos.component';

@NgModule({
  declarations: [
    AppComponent,
    PracticasComponent,
    EmetComponent,
    MetodosComponent,
    QueenComponent,
    EventosComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
