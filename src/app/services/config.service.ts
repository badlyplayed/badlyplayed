import { Injectable } from '@angular/core';
import { isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  apiURLDevelopment:string = "http://localhost:8080";
  apiURLProduction:string = "";

  tokenCookieName = "BadlyPlayed_AUTH";

  constructor() { }

  getApiBaseUrl(){
    if( isDevMode() ){
      return this.apiURLDevelopment;
    }
    return this.apiURLProduction;
  }
}
