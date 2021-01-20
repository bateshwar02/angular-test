import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { ProjectRoutingModule } from './project-routing.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  imports: [
    CommonModule, AngularMultiSelectModule,
    ProjectRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  declarations: [AddComponent, ViewComponent]
})
export class ProjectModule { }
