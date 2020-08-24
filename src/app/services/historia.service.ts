import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoriaService {

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
    private authService: AuthService
  ) { }

  getAllHistorias(){
    let headerData = this.authService.getHeaderWithToken();
    if (headerData != null){
      return this.http.get(this.configService.getApiBaseUrl() + '/api/historias',{ headers: headerData });
    }
  }

  getHistoriaById(id:string){
    let headerData = this.authService.getHeaderWithToken();
    if (headerData != null && id != null){
      return this.http.get(this.configService.getApiBaseUrl() + '/api/historias/'+id,{ headers: headerData });
    }
  }

  insertHistoria(historia){
    return this.http.post(this.configService.getApiBaseUrl() + '/api/historias',historia);
  }

  updateHistoria(historia){

  }

  deleteHistoria(id){
    
  }

}
