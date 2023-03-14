import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardComponentComponent} from "./card-component.component";



@NgModule({
  declarations: [
    CardComponentComponent
  ],
  exports:[
    CardComponentComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CardModuleModule { }
