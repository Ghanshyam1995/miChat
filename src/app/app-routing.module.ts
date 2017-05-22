import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "app/login/login.component";
import { HomeComponent } from "app/home/home.component";
import {AuthService} from "./auth.service";
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { ProfileComponent } from "app/profile/profile.component";
import { FindFriendComponent } from "app/find-friend/find-friend.component";


const routes: Routes = [
  {path: '',redirectTo:'Login',pathMatch:'full'},
  {path:'Login',component:LoginComponent},
  {path:'Home',component:HomeComponent,
children:[
  {path:'',redirectTo:'Dashboard',pathMatch:'full'},
  {path:'Dashboard',component:DashboardComponent},
  {path:'Profile',component:ProfileComponent},
  {path:'Find',component:FindFriendComponent},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
