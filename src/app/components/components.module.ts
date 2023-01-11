import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HijoComponent } from './hijo/hijo.component';
import { OtroHijoComponent } from './otrohijo/otrohijo.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HijoComponent,
    OtroHijoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HijoComponent,
    OtroHijoComponent
  ]
})
export class ComponentsModule { }
