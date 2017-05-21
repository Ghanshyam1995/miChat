import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { AuthService } from "app/auth.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {

  } 
  LoginForm: FormGroup;
  SignupForm: FormGroup;
  username :string;
  constructor(public auth: AuthService) { }

  ngOnInit() {

    this.LoginForm = new FormGroup({
      Username: new FormControl('', [<any>Validators.required]),
      Password: new FormControl('', [<any>Validators.required])
    });

    this.SignupForm = new FormGroup({
      Username: new FormControl('', [<any>Validators.required]),
      Firstname: new FormControl('', [<any>Validators.required]),
      LastName: new FormControl('', [<any>Validators.required]),
      Email: new FormControl('', [<any>Validators.required]),
      Dob: new FormControl('', [<any>Validators.required]),
      Password: new FormControl('', [<any>Validators.required, <any>Validators.minLength(8)])
    });
  }
  Login(LoginValues): void {
    this.auth.Login(LoginValues).subscribe(res => {
      console.log(res);
    });
  }

  Signup(SignupValues) {
    console.log(SignupValues);
  }

}
