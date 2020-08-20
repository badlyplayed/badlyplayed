import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private configService: ConfigService,
    private http: HttpClient,
  ) { }

  hasValidAuthentication() {

    if (localStorage.getItem(this.configService.tokenCookieName) == null) {
      return false;
    } else {
      try {
        let authData = JSON.parse(localStorage.getItem(this.configService.tokenCookieName));

        if (authData['accessToken'] != null) {

          // TODO : Adjust this
          return true;
          // this.http.post(this.configService.getApiBaseUrl() + '/api/auth/check', authData)
          //   .subscribe((data) => {
          //     if (data['error'] !== undefined) {
          //       return false;
          //     } else {
          //       return true;
          //     }
          //   });            
        }

      } catch (Error) {
        console.log("ERR");
        return false;
      }
    }
  }

  doLogin(userName: string, password: string) {

    if (userName != null && password != null) {

      let loginData = {};
      loginData["username"] = userName;
      loginData["password"] = password;

      var response = this.http.post<any>(
        this.configService.getApiBaseUrl() + '/api/auth/signin',
        loginData);

      response.subscribe(data => {
        if (data.accessToken != null) {
          localStorage.setItem(this.configService.tokenCookieName, JSON.stringify(data));
        }
      });

      return response;
    }

  }

  doLogout(){
    localStorage.removeItem(this.configService.tokenCookieName);
  }

  getStoredToken(){
    let authData = JSON.parse(localStorage.getItem(this.configService.tokenCookieName));
    return authData;
  }

  getHeaderWithToken():HttpHeaders{
    if( this.hasValidAuthentication() ){

      let authData = JSON.parse(localStorage.getItem(this.configService.tokenCookieName));
      if( authData['accessToken'] != null ){
        let header = new HttpHeaders();
        header = header.append("Content-Type","application/json");
        header = header.append("x-access-token",authData['accessToken']);
        return header;
      }
    }else{
      return null;
    }
  }

}
