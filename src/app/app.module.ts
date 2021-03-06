import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdNativeDateModule } from "@angular/material";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginComponent } from './login/login.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { AuthService } from "app/auth.service";
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ImageUploadModule } from 'ng2-imageupload';
import { RouteGuard } from "app/Auth.Guard";





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent
    
    
  ],
  imports: [
    MaterialModule,MdNativeDateModule,
    BrowserModule, BrowserAnimationsModule,
    FormsModule,ImageUploadModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthService,RouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
