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
   projectForm: FormGroup;submitted = false;
   user;user_list;form;form_list;product;prodData;
   

  constructor(private http: HttpClient, private router: Router,
    private formBuilder: FormBuilder,private globals: Globals,
    public msg:AlertMsgService) { }
    dropdownFormList=[];
    dropdownList = [];
    // selectedItems = [];
    // dropdownSettings = {};

  ngOnInit() {
    this.getFromList();
    this. getUserList();
    this.projectForm = this.formBuilder.group({
      pname: ['', Validators.required],
      description: ['', Validators.required],
      forms: [[],Validators.required] ,
      user: [[], Validators.required],
      symbol: ['', Validators.required],
      formssubmitted: ['', Validators.required],
      count: ['', Validators.required],
      total: ['', Validators.required]
    });

    // this.dropdownList = [
    //   {"id":1,"itemName":"India"},
    //   {"id":2,"itemName":"Singapore"},
    //   {"id":3,"itemName":"Australia"},
    //   {"id":4,"itemName":"Canada"},
    //   {"id":5,"itemName":"South Korea"},
    //   {"id":6,"itemName":"Germany"},
    //   {"id":7,"itemName":"France"},
    //   {"id":8,"itemName":"Russia"},
    //   {"id":9,"itemName":"Italy"},
    //   {"id":10,"itemName":"Sweden"}
    // ];
/* this.selectedItems = [
       
    ];
this.dropdownSettings = { 
          singleSelection: false, 
          text:"Select Countries",
          selectAllText:'Select All',
          unSelectAllText:'UnSelect All',
          enableSearchFilter: true,
          classes:"myclass custom-class"
        };  */          
  }

  get f() { return this.projectForm.controls; }
  AddProject(){
    console.log(this.projectForm.value);
    this.submitted = true;
    if (this.projectForm.valid) {
       const url = this.globals.URL + "/project/addProduct";
       this.http.post(url,this.projectForm.value).subscribe(res=>{
         this.product = res;
         if(this.product.status == 200 ){
            this.router.navigate(['project/view']);
         }else{
           this.msg.error_m('Something wend wronge.');
         }
           
       });  
    }
  }
  getUserList(){
    const url = this.globals.URL+"/user/getUserList";
    this.http.get(url)
      .subscribe(res => {
        this.user = res;
        this.user_list = this.user.data;
        this.dropdownList =  this.user_list;
        //console.log();
      })
  }
  getFromList(){
    const url = this.globals.URL+"/form/getFormList";
    this.http.get(url)
      .subscribe(res => {
        this.form = res;
        this.form_list = this.form.data;
        this.dropdownFormList = this.form_list;
      })
  }
//   onItemSelect(item:any){
//     console.log(item);
//     console.log(this.selectedItems);
// }
// OnItemDeSelect(item:any){
//     console.log(item);
//     console.log(this.selectedItems);
// }
// onSelectAll(items: any){
//     console.log(items);
// }
// onDeSelectAll(items: any){
//     console.log(items);
// }
}
