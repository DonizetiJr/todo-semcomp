import 'rxjs/add/operator/map';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ListComponent } from './list/list.component';
// import { routing } from './app.routes';
// import { CardModule } from './card/card.module';
// import { PanelModule } from './panel/panel.module';
// import { AddComponent } from './add/add.component';

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    // PanelModule,
    // CardModule,
    // routing
  ],
  declarations: [ AppComponent ],
  // declarations: [ AppComponent, ListComponent, AddComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
