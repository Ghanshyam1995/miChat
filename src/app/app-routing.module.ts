import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "app/login/login.component";
import { HomeComponent } from "app/home/home.component";
import {AuthService} from "./auth.service";
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { ProfileComponent } from "app/profile/profile.component";
import {RouteGuard} from './Route.guard';


const routes: Routes = [
  {path: '',redirectTo:'Login',pathMatch:'full'},
  {path:'Login',component:LoginComponent},
  {path:'Home',component:HomeComponent,canActivate:[RouteGuard],
children:[
  {path:'',redirectTo:'Dashboard',pathMatch:'full'},
  {path:'Dashboard',component:DashboardComponent},
  {path:'Profile',component:ProfileComponent},
  
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
