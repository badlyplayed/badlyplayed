import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordeService {

  constructor(private http: HttpClient) { }

  getHeroes(): any {
    var response = this.http.get('http://localhost:8080/api/recordes');
    return response;
  }
}
