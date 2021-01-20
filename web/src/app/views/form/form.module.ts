import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { FormRoutingModule } from './form-routing.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  imports: [
    CommonModule,
    FormRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  declarations: [AddComponent, ViewComponent]
})
export class FormModule { }
