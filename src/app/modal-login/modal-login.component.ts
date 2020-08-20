import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.less']
})
export class ModalLoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(
    public activeModal: NgbActiveModal,
    private authService : AuthService
  ) { }

  ngOnInit(): void {
  }

  passBack() {
    this.activeModal.close();
  }

  doLogin(){
    if( this.username != '' && this.password != '' ){
      let response = this
        .authService
        .doLogin(this.username,this.password).subscribe((data)=>{
          // TODO : Show login failed message
          this.activeModal.close();
        });
    }
  }

}
