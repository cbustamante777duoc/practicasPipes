import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';


import localES from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { TituloPipe } from './pipes/titulo.pipe';
import { PsSuspensivoPipe } from './pipes/ps-suspensivo.pipe';
registerLocaleData(localES,'es');

@NgModule({
  declarations: [
    AppComponent,
    TituloPipe,
    PsSuspensivoPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule

  ],
  providers: [{provide:LOCALE_ID, useValue:'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
