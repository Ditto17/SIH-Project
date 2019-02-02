import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { OptionsComponent } from './options/options.component';
import { AdvComponent } from './adv/adv.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OptionsComponent,
    AdvComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
