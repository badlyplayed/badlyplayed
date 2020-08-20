import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-modal-administrative',
  templateUrl: './modal-administrative.component.html',
  styleUrls: ['./modal-administrative.component.less']
})
export class ModalAdministrativeComponent implements OnInit {

  active = 1;

  constructor(
    public activeModal: NgbActiveModal,
    private authService : AuthService
  ) { }

  ngOnInit(): void {
  }

  passBack() {
    this.activeModal.close();
  }

  logout(){
    this.activeModal.close();
    this.authService.doLogout();
  }

}
