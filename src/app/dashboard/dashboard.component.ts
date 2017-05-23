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

  constructor(private authService: AuthService) { }

  ngOnInit() {
     this.GetOnlineUser();
  }
  GetOnlineUser(){
    
       this.authService.GetOnlineFriends().subscribe(user=>{
           this.OnlineUsers.push(user);
       });
  }
}
