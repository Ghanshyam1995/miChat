import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";
import * as io from "socket.io-client";
import { Http, Headers } from "@angular/http";

@Injectable()
export class AuthService {
  userId :string;
  private socket;  
  constructor(private _http: Http){ 
    this.socket=io("http://localhost:3000");
  }

  Login(LoginValues) {
     let headers =new Headers();
     headers.append('Content-Type','application/json');
     return this._http.post('/Users/Login', JSON.stringify({ LoginValues }), { headers: headers }).map(res => {
        let body=res.text();
        debugger;
        let user=JSON.parse(body);
        if(body)
        {   debugger;
            this.userId=user._id;
            localStorage.setItem('token',body);
            this.socket.emit('Login',this.userId);
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
     return this._http.get(`/Users/Profile/${id}`).map(res=>res.json());
  }
   
   GetOnlineFriends()
   {
     let observable=new Observable((observer)=>{
            this.socket.on("OnlineUsers",(user)=>{
              observer.next(user.newUser);
            });
            return ()=>{
              this.socket.disconnect();
            };
     });
     return observable;
   }

    isLoggedIn() :boolean{
           if(localStorage.getItem("token")!=null)
           return true;
           else
             return false;
    }

 
}
