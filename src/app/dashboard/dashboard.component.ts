import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/auth.service";
import {trigger,style,animate,transition,keyframes} from "@angular/animations";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations:[
         trigger('animate',[
              transition("*=>*",[
                      animate('1s ease-in',keyframes([
                      style({'opacity':'0'}),
                      style({'opacity':'.2'}),
                      style({'opacity':'.4'}),
                      style({'opacity':'.6'}),
                      style({'opacity':'.8'}),
                      style({'opacity':'1'})
                    ]))
              ]),
         ])
  ]

})

export class DashboardComponent implements OnInit {
 OnlineUsers=Array<any>();
 totalUsers:number;
 friendsWindow :number;
  constructor(private authService: AuthService) {
    this.friendsWindow=300;
   }

  ngOnInit() {
      this.authService.OnlineUsers().subscribe(user=>{
        this.OnlineUsers=user;
          this.totalUsers=this.OnlineUsers.length;
      });

      this.GetOnlineUser();
  }
  GetOnlineUser(){
       this.authService.GetOnlineFriends().subscribe(user=>{
           let index=(this.OnlineUsers).indexOf(user);
           console.log(index);
           this.OnlineUsers.push(user);
           this.totalUsers=this.OnlineUsers.length;
       });
  }
 
 OpenChatBox(user :any)
 {
   alert(user);
 }
}
