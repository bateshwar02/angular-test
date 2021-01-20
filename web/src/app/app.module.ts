import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StorageServiceModule} from 'angular-webstorage-service';
import { NgbModule,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';


// Import containers
import { DefaultLayoutComponent } from './containers';
import { LoginComponent } from './views/login/login.component';
import { AuthService } from './auth.service';
import { AlertMsgService} from './alert-msg.service';
import { AuthGuard } from './auth.guard';
import { Globals } from './globals';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule ,AngularMultiSelectModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    HttpClientModule,ReactiveFormsModule,StorageServiceModule,NgbModule.forRoot(),
    SweetAlert2Module.forRoot()
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    LoginComponent,
  ],
  providers: [ AuthService,Globals, AuthGuard,NgbActiveModal,AlertMsgService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
