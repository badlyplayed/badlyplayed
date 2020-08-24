import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ParametrosService {

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
    private authService: AuthService
  ) { }

  getContatos() {
    var response = this.http.get(this.configService.getApiBaseUrl() + '/api/parametros');
    return response;
  }

  saveContatos(contatos: any) {
    
    let headerData = this.authService.getHeaderWithToken();
    if (headerData != null) {
      return this.http.post( this.configService.getApiBaseUrl() + '/api/parametros/contatos',
        contatos, { headers: headerData }).subscribe((data)=>{
          console.log(data);
        });
    }

  }
}
