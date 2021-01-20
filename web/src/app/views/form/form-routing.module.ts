import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Forms'
    },
    children: [
      {
        path: 'view',
        component: ViewComponent,
        data: {
          title: 'List'
        },
      },
      {
        path: 'add',
        component: AddComponent,
        data: {
          title: 'List'
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
