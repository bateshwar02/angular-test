import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import {Globals} from '../../../globals';
import { AlertMsgService} from '../../../alert-msg.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  imageUrl = '';fileName ='';public loaded = false;addUserForm;
  fcname;lcname;email;pass;imgfile;reg_data;res_msg;
  userForm: FormGroup;submitted = false;
  constructor(private http: HttpClient, private router: Router,
     private formBuilder: FormBuilder,private globals: Globals,
     public msg:AlertMsgService) { }
  ngOnInit() {
    this.userForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      age: ['',Validators.required] ,
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
      
    });
  }
  get f() { return this.userForm.controls; }
  onchangeImage(event) {
    if (event.target.files && event.target.files.length > 0) {
      this.imgfile = event.target.files[0];
      this.fileName =  this.imgfile.name;
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
      }
      reader.readAsDataURL(this.imgfile);
      this.loaded = true;
    }
  }
  AddUser() {
    this.submitted = true;
    if (this.userForm.valid) {
    this.addUserForm =this.userForm.value;
    let formdata = new FormData();
    formdata.append('imageFile', this.imgfile);
    formdata.append('fname', this.addUserForm.fname);
    formdata.append('lname', this.addUserForm.lname);
    formdata.append('email', this.addUserForm.email);
    formdata.append('pass', this.addUserForm.pass);
    formdata.append('age', this.addUserForm.age);
    const url = this.globals.URL+"/user/addUser";
    this.http.post(url, formdata)
      .subscribe(res => {
        this.reg_data = res;
        this.res_msg = this.reg_data.status;
        if (this.res_msg == 200) {
          this.router.navigate(['/user/view']);
        }else{
          this.msg.error_m(this.reg_data.message);
        }
      })
    }
    
  }
}
