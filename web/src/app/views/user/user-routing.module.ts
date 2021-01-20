import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'User'
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
export class UserRoutingModule { }
