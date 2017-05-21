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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    MaterialModule,MdNativeDateModule,
    BrowserModule, BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
