import { Injectable } from '@angular/core';
import { isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  apiURLDevelopment:string = "http://localhost:3000";
  apiURLAWS:string = "http://ec2-3-128-160-44.us-east-2.compute.amazonaws.com:3000";

  tokenCookieName = "BadlyPlayed_AUTH";

  constructor() { }

  getApiBaseUrl(){
    if( isDevMode() ){
      return this.apiURLAWS;
    }
    return this.apiURLAWS;
  }

}
