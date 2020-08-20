import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../services/auth.service';

import { ModalLoginComponent } from '../modal-login/modal-login.component'
import { ModalAdministrativeComponent } from '../modal-administrative/modal-administrative.component';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.less']
})
export class RodapeComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private authService : AuthService
  ) { }

  ngOnInit(): void {
  }

  openModal() {

    // If our authentication information is valid
    // open Adminstrative otherwise open login
    let a = this.authService.hasValidAuthentication();
    if( !this.authService.hasValidAuthentication() ){
      this.modalService.open(ModalLoginComponent);
    }else{
      this.modalService.open(ModalAdministrativeComponent, { size: 'xl' });
    }

  }

}
