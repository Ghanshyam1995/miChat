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
import { FriendService } from "app/friend.service";
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { FindFriendComponent } from './find-friend/find-friend.component';
import { ImageUploadModule } from 'ng2-imageupload';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    FindFriendComponent
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
  providers: [AuthService,FriendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
