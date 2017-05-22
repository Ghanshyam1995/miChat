import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import {Router} from "@angular/router";
import { AuthService } from "app/auth.service";
import { ImageResult, ResizeOptions } from 'ng2-imageupload';
import 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
   src: string = "";
    resizeOptions: ResizeOptions = {
        resizeMaxHeight: 128,
        resizeMaxWidth: 128
    };
  
  ngOnDestroy(): void {

  } 
  LoginForm: FormGroup;
  SignupForm: FormGroup;
  // username =new FormControl();
  constructor(public auth: AuthService,private router :Router) { }

  ngOnInit() {

    this.LoginForm = new FormGroup({
      Username: new FormControl('', [<any>Validators.required]),
      Password: new FormControl('', [<any>Validators.required])
    });

    this.SignupForm = new FormGroup({
      Username: new FormControl('', [<any>Validators.required]),
      Firstname: new FormControl('', [<any>Validators.required]),
      Lastname: new FormControl('', [<any>Validators.required]),
      Email: new FormControl('', [<any>Validators.required]),
      Dob: new FormControl('', [<any>Validators.required]),
      Password: new FormControl('', [<any>Validators.required, <any>Validators.minLength(8)]),
      pic : new FormControl('')
    });

//  this.username.valueChanges.debounceTime(1000).subscribe(event=>{
//       console.log(event);
// });
    
  }
  Login(LoginValues): void {
    this.auth.Login(LoginValues).subscribe(res => {
         if(res)
         {
              this.router.navigate(['/Home']);   
         }
    });
  }
  selected(imageResult: ImageResult) {
    debugger;
        this.src = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
    }

  Signup(SignupValues) {
    debugger;
    SignupValues.pic=this.src;
    this.auth.Signup(SignupValues).subscribe(res=>{
       
    });
  }


}
