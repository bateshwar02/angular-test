import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { LoginComponent } from './views/login/login.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {

    path: '',
    component: DefaultLayoutComponent, canActivate: [AuthGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'project',
        loadChildren: './views/project/project.module#ProjectModule'
      },
      {
        path: 'form',
        loadChildren: './views/form/form.module#FormModule'
      },
      {
        path: 'user',
        loadChildren: './views/user/user.module#UserModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
