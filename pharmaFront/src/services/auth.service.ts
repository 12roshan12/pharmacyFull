import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root',
})
export class AuthService {

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
        //   'Authorization': 'my-auth-token'
        })
      };
  constructor(private _http: HttpClient) {}

  

  signin(body: any) {
    return this._http.post(`http://localhost:1234/user/getuserbyid`, body);
  }

  signup(body: any) {
   return this._http.post(`http://localhost:1234/user/adduser/`, body, this.httpOptions);
  }
}
