import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service'

@Component({
  selector: 'app-parametros-usuarios',
  templateUrl: './parametros-usuarios.component.html',
  styleUrls: ['./parametros-usuarios.component.less']
})
export class ParametrosUsuariosComponent implements OnInit {

  usuarios:any;
  usuario:any = {};

  constructor(
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.authService.getUsuarios().subscribe((data)=>{
      this.usuarios = data;
    });
  }

  adicionarUsuario(){
    this.authService.insertUsuario(this.usuario).subscribe((data)=>{
      this.authService.getUsuarios().subscribe((dataUser)=>{
        this.usuarios = dataUser;
      });
    });
  }

  removeUsuario(id){
    this.authService.removerUSuario(id).subscribe((data)=>{
      this.authService.getUsuarios().subscribe((dataUser)=>{
        this.usuarios = dataUser;
      });
    });
  }

}
