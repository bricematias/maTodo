import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModModule} from "./SharedModule/shared-mod/shared-mod.module";

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        CommonModule,
        SharedModModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
