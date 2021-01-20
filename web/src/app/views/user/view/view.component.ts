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
  uData;uuData;
  constructor(public msg: AlertMsgService,private globals: Globals,private http: HttpClient) { }
  ngOnInit() {
    this.uData='';
    this.http.get(this.globals.URL+"/user/getUserList").subscribe(res=>{
      this.uData = res;
      this.uuData =this.uData.data; 
      console.log(this.uData);
    });
  }
  alertMsg(){
    this.msg.warning_m("Work in progress");
  }

}
