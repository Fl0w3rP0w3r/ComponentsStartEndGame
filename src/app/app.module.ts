import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OddComponent } from './odd.component';
import { EvenComponent } from './even.component';
import { GameControlComponent } from './gameControl.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, OddComponent, EvenComponent, GameControlComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
