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
     return this._http.post('/Users/Login', JSON.stringify({ LoginValues }), { headers: headers }).map(res => {
        let body=res.text();
        if(body)
        { debugger
            localStorage.setItem('token',body);
        }
        return body;
     });
     
  }

  Signup(user)
  {
     let headers =new Headers();
     headers.append('Content-Type','application/json');
     return this._http.post('/Users/Signup', JSON.stringify({ user }), { headers: headers }).map(res => res.json());
  }
  GetUser(id) : Observable<any>
  {
     debugger;
     console.log(id); 
     return this._http.get(`/Users/Profile/${id}`).map(res=>res.json());
  }


 
}
