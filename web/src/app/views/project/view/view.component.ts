import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../../../globals';
import { AlertMsgService } from '../../../alert-msg.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap'; 

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  pData;ppData;prData;prrData;
  age;count;createdon;description;email;firstName;lastName;formssubmitted;imageURL;fname;project;shape;symbol;total
  constructor(public msg: AlertMsgService,private globals: Globals,private http: HttpClient,private modalService: NgbModal) { }

  ngOnInit() {
    this.pData='';
    this.http.get(this.globals.URL+"/project/getProjectList").subscribe(res=>{
      this.pData = res;
      this.ppData =this.pData.data; 
    });
  }
  alertMsg(){
    this.msg.warning_m("Work in progress");
  }
  open(content,id) {
    this.projectDetails(id);
    this.modalService.open(content, { size: 'lg' });
 }
 projectDetails(id){
  const url= this.globals.URL+"/project/getProjectDetailsByid/"+id;
  this.http.get(url)
  .subscribe(res=>
  {
    this.prData = res;
    this.prrData = this.prData.data;
    console.log(this.prrData);
    return false;
    if(this.prrData  != ''){
      this.fname=this.prrData.name;
      this.project=this.prrData.project;
      this.shape=this.prrData.shape;
      this.symbol=this.prrData.symbol;
      this.total=this.prrData.total;
      this.firstName=this.prrData.firstName;
      this.lastName =this.prrData.lastName;
      this.formssubmitted=this.prrData.formssubmitted;
      this.imageURL=this.prrData.imageURL;
      this.total=this.prrData.total;
      this.count=this.prrData.count;
      this.createdon=this.prrData.createdon;
      this.description=this.prrData.description;
      this.email=this.prrData.email;
      this.age=this.prrData.age;

    }
    
  })
 }
}
