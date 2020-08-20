import { Component, OnInit } from '@angular/core';
import { ParametrosService } from '../services/parametros.service'

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.less']
})
export class ContatoComponent implements OnInit {

  contatos:any;

  constructor(private parametrosService:ParametrosService) { }

  ngOnInit(): void {
    this.parametrosService.getContatos().subscribe((data)=>{
      this.contatos = data;
    });
  }

}
