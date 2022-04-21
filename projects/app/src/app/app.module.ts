import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PatternModule, ButtonModule } from 'pattern';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PatternModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
