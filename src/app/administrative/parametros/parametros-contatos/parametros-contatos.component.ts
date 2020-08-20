import { Component, OnInit } from '@angular/core';
import { ParametrosService } from '../../../services/parametros.service'

@Component({
  selector: 'app-parametros-contatos',
  templateUrl: './parametros-contatos.component.html',
  styleUrls: ['./parametros-contatos.component.less']
})
export class ParametrosContatosComponent implements OnInit {

  contatos:any = {};

  constructor(private parametrosService:ParametrosService) { }

  ngOnInit(): void {
    this.parametrosService.getContatos().subscribe((data)=>{
      this.contatos = data;
    });
  }

  salvarContatos(){
    this.parametrosService.saveContatos(this.contatos);
  }

}
