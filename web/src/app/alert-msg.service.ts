import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class AlertMsgService {

  constructor(private myRoute: Router, private modalService: NgbModal) { }
  success_m(message) {
    this.modalService.dismissAll();
    swal({
      html: '<div class="success-alert">' +
        '<img class="success-img" src="assets/img/success.png"></div>' +
        '<div class="succ_mesg"><h4>Success! </h4></div>' +
        '<div class="text-msg" >' + message + ' </div>'

    });
  }
  error_m(message) {
    this.modalService.dismissAll();
    swal({
      html: '<div class="success-alert">' +
        '<img class="success-img" src="assets/img/error.png"></div>' +
        '<div class="succ_mesg"><h4>Error! </h4></div>' +
        '<div class="text-msg" >' + message + ' </div>'
    });
  }
  warning_m(message) { 
    this.modalService.dismissAll();
    swal({
      html: '<div class="success-alert">' +
        '<img class="success-img" src="assets/img/warning.png"></div>' +
        '<div class="succ_mesg"><h4>Warning! </h4></div>' +
        '<div class="text-msg" >' + message + ' </div>'
    });
  }
}

