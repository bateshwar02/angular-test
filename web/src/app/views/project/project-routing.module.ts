import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Project'
    },
    children: [
      {
        path: 'add',
        component:AddComponent,
        data: {
          title: 'Add Project'
        }
      },
      {
        path: 'view',
        component: ViewComponent,
        data: {
          title: 'Project View'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
