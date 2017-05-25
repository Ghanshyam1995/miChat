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
                      animate('.5s ease-in',keyframes([
                      style({'transform':'scale(0)'}),
                      style({'transform':'scale(.5)'}),
                      style({'transform':'scale(1)'})
                    ]))
              ]),
         ])
  ]

})

export class DashboardComponent implements OnInit {
 OnlineUsers=[];
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
  }
  GetOnlineUser(){
        this.authService.GetOnlineFriends().subscribe(user=>{
       
           this.OnlineUsers.push(user);
           this.totalUsers=this.OnlineUsers.length;
       });
  }
  ToggleHeight()
  {
    this.friendsWindow ==300 ? this.friendsWindow=50 :this.friendsWindow =300;
  }
}
