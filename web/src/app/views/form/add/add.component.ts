import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient,HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import {Router} from '@angular/router';
import {Globals} from '../../../globals';
import { AlertMsgService} from '../../../alert-msg.service';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
    forms: FormGroup;submitted = false;
    form_data;formData;  

    constructor(private http: HttpClient, private router: Router,
    private formBuilder: FormBuilder,private globals: Globals,private auth: AuthService,
    public msg:AlertMsgService,@Inject(LOCAL_STORAGE) private storage: WebStorageService,) { }
 ngOnInit() {
   this.forms = this.formBuilder.group({
     name: ['', Validators.required],
     shape: ['', Validators.required]
   });
 }
 get f() { return this.forms.controls; }
 AddForms() {
  var token = localStorage.getItem("userToken");
  const headers = new HttpHeaders({'token':token});

  this.submitted = true;
  if (this.forms.valid) {
  const url = this.globals.URL+"/form/addForm";
  this.http.post(url, this.forms.value,{ headers: headers })
    .subscribe(res => {
      this.form_data = res;
      this.formData = this.form_data;
      //console.log('console response =='+this.formData.userToken);
      if (this.formData.status == 200 && this.formData.userToken!='') {
        localStorage.removeItem("userToken");
        this.storage.set('userToken', this.formData.userToken);
        this.router.navigate(['/form/view']);
      }else if(this.formData == 500){
         this.router.navigate(['/form/view']);
         localStorage.removeItem("userToken");
         this.auth.logout();
      }else{
        this.msg.error_m(this.formData.message);
      }
    },
    error=>{
      this.router.navigate(['/form/view']);
      localStorage.removeItem("userToken");
      this.auth.logout();
    }
  
  )
  }
}
}