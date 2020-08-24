import { Component, OnInit } from '@angular/core';
import { HistoriaService } from '../../services/historia.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HistoriasDetalhesComponent } from '../historias-detalhes/historias-detalhes.component'

@Component({
  selector: 'app-historias',
  templateUrl: './historias.component.html',
  styleUrls: ['./historias.component.less']
})
export class HistoriasComponent implements OnInit {

  historias:any = [];

  constructor(
    private historiaService:HistoriaService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.historiaService.getAllHistorias().subscribe((data)=>{
      this.historias = data;
    },(err)=>{
      this.historias = {};
    });
  }

  openModal(id:string) {
    this.historiaService.getHistoriaById(id).subscribe((data)=>{
      const modalRef = this.modalService.open(HistoriasDetalhesComponent, { size: 'xl' });
      modalRef.componentInstance.historia = data[0];
    });    
  }

}
