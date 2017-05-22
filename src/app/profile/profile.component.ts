import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from "app/auth.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void {
    this.User.unsubscribe();
  }
  userId: string;
  User :Subscription=new Subscription();
  constructor(private authService: AuthService) { 
     let user=JSON.parse(localStorage.getItem("token"));
     this.userId=user._id;
  }

  ngOnInit() {
    debugger;
       this.User=this.authService.GetUser(this.userId).subscribe(res=>{
        console.log(res);
      })
  }

}
