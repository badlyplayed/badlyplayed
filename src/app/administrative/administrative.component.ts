import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-administrative',
  templateUrl: './administrative.component.html',
  styleUrls: ['./administrative.component.less']
})
export class AdministrativeComponent implements OnInit {

  active = 1;
  isAdmin:boolean = false;

  constructor(
    private router: Router,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    if( !this.authService.hasValidAuthentication() ){
      this.router.navigate(['/']);
    }

    this.isAdmin = this.authService.isStoredTokenAdmin();
  }

}
