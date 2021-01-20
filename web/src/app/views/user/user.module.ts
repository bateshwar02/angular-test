import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UserRoutingModule } from './user-routing.module';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  declarations: [ViewComponent,AddComponent]
})
export class UserModule { }
