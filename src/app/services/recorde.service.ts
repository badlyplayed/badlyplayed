import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class RecordeService {

  constructor(
    private http: HttpClient,
    private configService:ConfigService
  ) { }

  getHeroes(): any {
    var response = this.http.get( this.configService.getApiBaseUrl() + '/api/recordes');
    return response;
  }
}
