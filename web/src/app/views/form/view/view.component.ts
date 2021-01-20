import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../../../globals';
import { AlertMsgService } from '../../../alert-msg.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  fData;ffData;del;delet;
  constructor(public msg: AlertMsgService,private globals: Globals,private http: HttpClient) { }
  ngOnInit() {
   this.fetchData();
  }
  alertMsg(){
    this.msg.warning_m("Work in progress");
  }
  delete(id){
    this.http.get(this.globals.URL+"/form/deleteForm/"+id).subscribe(res=>{
      this.del = res;
      if(this.del.affectedRows !=''){
         this.fetchData();
      }else{
        this.alertMsg();
      }
    });
  }
 fetchData(){
  this.fData='';
  this.http.get(this.globals.URL+"/form/getFormList").subscribe(res=>{
    this.fData = res;
    this.ffData =this.fData.data;
  });
 }
}
