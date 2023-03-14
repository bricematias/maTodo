import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardComponentComponent} from "../card-component/card-component.component";
import {CardModuleModule} from "../card-component/card-module.module";



@NgModule({
  declarations: [],
  exports:[
    CardModuleModule
  ],
  imports: [
    CommonModule,
    CardModuleModule,
  ]
})
export class SharedModModule { }
