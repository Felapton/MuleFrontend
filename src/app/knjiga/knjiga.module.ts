import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { KnjigaComponent } from './knjiga.component';


@NgModule({
  declarations: [KnjigaComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    KnjigaComponent
  ]
})
export class KnjigaModule { }
