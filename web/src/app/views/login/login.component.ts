import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Globals } from '../../globals';
import { AuthService } from '../../auth.service';
import { AlertMsgService} from '../../alert-msg.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  loginForm: FormGroup; passForm:FormGroup;
  submitted = false;successCheck =0;
  response; response_msg; error_msg;newpassword;userName;username;
  public alert_msg = false;user_data;userData; existUser=0;
  constructor(private modalService: NgbModal,public msg:AlertMsgService,private globals: Globals, private router: Router, private http: HttpClient, private formBuilder: FormBuilder, @Inject(LOCAL_STORAGE) private storage: WebStorageService, private auth: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.passForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      newpassword: ['', [Validators.required]]
    });

  }

  get f() { return this.loginForm.controls; }

  login() {
    this.submitted = true;
    if (this.loginForm.valid) {
       const url = this.globals.URL + "/user/login";
       this.http.post(url,this.loginForm.value).subscribe(res=>{
         this.user_data = res;
         if(this.user_data.status == 200 ){
            this.userData =  this.user_data.userData;
            this.storage.set('login', this.userData[0]);
            this.storage.set('userToken', this.user_data.userToken);
            this.router.navigate(['/dashboard']);
         }else{
           this.msg.error_m('Username or password is wrong.');
         }
           
       });  


    //  if(this.existUser !=0){
    //   this.storage.set('login',this.loginForm.value);
    //   this.router.navigate(['/user/view']);
    //  }else{
    //     this.msg.error_m('Username or password is wrong.');
    //  }

    }

  }
  closeAlert() {
    this.alert_msg = false;
  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
  changePassword() {
   
    if (this.successCheck != 0) {
      this.username = '';this.newpassword='';
      this.msg.success_m('Successfully password updated');
    }else{
      this.username = '';this.newpassword='';
      this.msg.warning_m('Wronge Username');
    }
  }
}
