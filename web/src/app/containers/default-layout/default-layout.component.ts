import { Component, Input, Inject, OnInit } from '@angular/core';
import { navItems } from './../../_nav';
import { AuthService } from '../../auth.service';
import { AlertMsgService } from '../../alert-msg.service';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { HttpClient} from '@angular/common/http';
import { Globals } from '../../globals';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  user_data; profile_data; prof_data; user_image; user_name; oldpassword; newpassword; change_Pass; prop_msg;
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body; successCheck = 0;
  public err_alert = false;
  public succ_alert = false;


  constructor(public msg: AlertMsgService, public globals: Globals, private auth: AuthService, @Inject(LOCAL_STORAGE) private storage: WebStorageService,
    private http: HttpClient, private formBuilder: FormBuilder, private modalService: NgbModal) {
    this.user_data = this.storage.get("login");
    this.user_image = this.user_data.imageURL;
    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }
  ngOnInit() {
    //console.log(this.user_data);
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  // change password

  changePassword() {
    
    if (this.successCheck != 0) {
      this.oldpassword = '';this.newpassword='';
      this.msg.success_m('Successfully password changed');
    }else{
      this.oldpassword = '';this.newpassword='';
      this.msg.warning_m('Old password is wronge');
    }
  }
}
