import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";
import * as io from "socket.io-client";
import { Http, Headers } from "@angular/http";

@Injectable()
export class AuthService {
  private socket;  
  constructor(private _http: Http) { }

  Login(LoginValues) {
    let headers =new Headers();
     headers.append('Content-Type','application/json');
     return this._http.post('/Users/Login', JSON.stringify({ LoginValues }), { headers: headers }).map(res => res.json());
  }
}
