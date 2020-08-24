import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-historias-detalhes',
  templateUrl: './historias-detalhes.component.html',
  styleUrls: ['./historias-detalhes.component.less']
})
export class HistoriasDetalhesComponent implements OnInit {

  @Input() public historia;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log(this.historia);
  }

  passBack() {
    this.activeModal.close();
  }

}
