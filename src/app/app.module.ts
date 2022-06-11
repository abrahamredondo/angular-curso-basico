import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Tarea:
// Crear un módulo COntadorModule
// dlcalaraciones y exportaciones

import { heroesModelude } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';


@NgModule({
  declarations: [
    AppComponent   
    
  ],
  imports: [
    BrowserModule,
    heroesModelude,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
