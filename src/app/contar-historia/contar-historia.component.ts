import { Component, OnInit } from '@angular/core';
import { HistoriaService } from '../services/historia.service';
import { ViewChild, ElementRef } from '@angular/core';

export class Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-contar-historia',
  templateUrl: './contar-historia.component.html',
  styleUrls: ['./contar-historia.component.less']
})

export class ContarHistoriaComponent implements OnInit {

  historia: any = { 'foiPunido': 'sim' };
  alerts: Alert[] = [];
  imageData = null;
  @ViewChild('inputFile') myInputVariable: ElementRef;

  // validation
  validationErrorStyle = "2px solid red";
  validationOKStyle = null;
  idadeValidation = null;
  generoValidation = null;
  jogoValidation = null;
  dataDiaValidation = null;
  dataMesValidation = null;
  dataAnoValidation = null;
  paisValidation = null;
  detalhesValidation = null;

  idades = [];
  dias = [];
  anos = [];
  meses = [];
  paises = [];

  constructor(
    private historiaService: HistoriaService
  ) { }

  ngOnInit(): void {
    
    // idades
    for( var i = 1 ; i < 80 ; i++ ){
      this.idades.push(i);
    }

    // dias
    for( var i = 1 ; i < 32 ; i++ ){
      this.dias.push(i);
    }

    // anos
    for( var i = 2000 ; i < 2050 ; i++ ){
      this.anos.push(i);
    }

    this.meses.push('Janeiro');
    this.meses.push('Fevereiro');
    this.meses.push('Março');
    this.meses.push('Abril');
    this.meses.push('Maio');
    this.meses.push('Junho');
    this.meses.push('Julho');
    this.meses.push('Agosto');
    this.meses.push('Setembro');
    this.meses.push('Outubro');
    this.meses.push('Novembro');
    this.meses.push('Dezembro');

    this.paises.push('Brasil');
    
  }

  contarHistoria() {
    if (this.validateForm()) {
      this.historia['printscreen'] = this.imageData;
      this.historiaService.insertHistoria(this.historia).subscribe((data) => {

        let alert = new Alert();
        alert.type = "Success";
        alert.message = "Sua história foi contada com sucesso. Obrigado por colaborar com o projeto #badlyplayed.</strong>";
        this.alerts.push(alert);
        this.historia = { 'foiPunido': 'sim' };

      }, (err) => {
        let alert = new Alert();
        alert.type = "Danger";
        alert.message = "Erro ao contar a sua história. Tente novamente em alguns minutos.";
        this.alerts.push(alert);
      });
    }
  }

  onItemChange(value) {
    this.historia['foiPunido'] = value;
  }

  validateForm(): boolean {

    this.idadeValidation = this.historia['idade'] ? this.validationOKStyle : this.validationErrorStyle;
    this.generoValidation = this.historia['genero'] ? this.validationOKStyle : this.validationErrorStyle;
    this.jogoValidation = this.historia['jogo'] ? this.validationOKStyle : this.validationErrorStyle;
    this.dataDiaValidation = this.historia['dataDia'] ? this.validationOKStyle : this.validationErrorStyle;
    this.dataMesValidation = this.historia['dataMes'] ? this.validationOKStyle : this.validationErrorStyle;
    this.dataAnoValidation = this.historia['dataAno'] ? this.validationOKStyle : this.validationErrorStyle;
    this.paisValidation = this.historia['pais'] ? this.validationOKStyle : this.validationErrorStyle;
    this.detalhesValidation = this.historia['detalhes'] ? this.validationOKStyle : this.validationErrorStyle;

    let valid = this.historia['idade'] != undefined &&
      this.historia['genero'] != undefined &&
      this.historia['jogo'] != undefined &&
      this.historia['dataDia'] != undefined &&
      this.historia['dataMes'] != undefined &&
      this.historia['dataAno'] != undefined &&
      this.historia['pais'] != undefined &&
      this.historia['detalhes'] != undefined;

    if (!valid) {
      let alert = new Alert();
      alert.type = "Warning";
      alert.message = "Informe todos os campos para contar a sua história.";
      this.alerts.push(alert);
    }

    return valid;

  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  handleUpload(event) {
    const file = event.target.files[0];

    console.log(file);
    
    if( file['size'] > 102400 ){
      var alert = new Alert();
      alert.type = "Danger";
      alert.message = "Atenção. O tamanho máximo do arquivo de print é de 100kb."
      this.alerts.push(alert);
      this.removerPrint();
      return;
    }

    if( 
      file['type'] != 'image/jpeg' &&
      file['type'] != 'image/png'
    ){
      var alert = new Alert();
      alert.type = "Danger";
      alert.message = "O formato de imagem deve ser *.jpeg ou *.png."
      this.alerts.push(alert);
      this.removerPrint();
      return;
    }

    //image/jpeg
    //image/png
    //type

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageData = reader.result;
    };
  }

  removerPrint() {
    this.imageData = null;
    this.myInputVariable.nativeElement.value = '';
  }

}
