import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HistoriaService } from '../../services/historia.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-historias-detalhes',
  templateUrl: './historias-detalhes.component.html',
  styleUrls: ['./historias-detalhes.component.less']
})
export class HistoriasDetalhesComponent implements OnInit {

  @Input() public historia;

  constructor(
    public activeModal: NgbActiveModal,
    private historiaService:HistoriaService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    console.log(this.historia);
  }

  passBack() {
    this.activeModal.close();
  }

  apagarHistoria(){
    this.historiaService.deleteHistoria(this.historia["_id"]).subscribe((data)=>{
      this.activeModal.close();
    });
  }

  apagarMedia(){
    this.historia['printscreen'] = '';
    this.historiaService.updateHistoria(this.historia).subscribe((data)=>{
      console.log(data);
    });
  }

  baixarMedia(){
    if( this.historia['printscreen'] != null && this.historia['printscreen'] != '' ){
      //this.router.navigate([this.historia['printscreen']]);
      //window.location.href = this.historia['printscreen'];
      //window.open(this.historia['printscreen'], "_blank");
      const filename = 'download.jpg';
      const contentType = 'image/png';
      const blobData = this.convertBase64ToBlobData(this.historia['printscreen']);

      if (window.navigator && window.navigator.msSaveOrOpenBlob) { //IE
        window.navigator.msSaveOrOpenBlob(blobData, filename);
      } else { // chrome
        const blob = new Blob([blobData], { type: contentType });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
        // const link = document.createElement('a');
        // link.href = url;
        // link.download = filename;
        // link.click();
      }
    }
  }

  marcarNaoVerificado(){
    this.historia['verificado'] = false;
    this.historiaService.updateHistoria(this.historia).subscribe((data)=>{
      
    });
  }

  marcarVerificado(){
    this.historia['verificado'] = true;
    this.historiaService.updateHistoria(this.historia).subscribe((data)=>{
      
    });
  }

  convertBase64ToBlobData(base64Data: string, contentType: string='image/png', sliceSize=512) {
    const byteCharacters = atob(base64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

}
