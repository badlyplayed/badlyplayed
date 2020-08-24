import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.less']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private authService : AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.doLogout();
    this.router.navigate(['/']);
  }

}
