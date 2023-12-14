import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { AuthService, AuthResData } from '../../auth.service';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  authObsv: Observable<AuthResData> | any;
  isLoginMode = true;
  errorMsg: string | null = null;
  subscription!: Subscription;
  loginForm: any;
  hasSubmitted!: boolean;

  get email(){ return this.loginForm.get('email');}
  get password(){ return this.loginForm.get('password');}

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group ({
      email : ['',[Validators.required]],
      password : ['',[Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.hasSubmitted = true;
    const loginForm = form.value;
    const { email, password } = form.value;
    if (!form.valid || !email || !password) return;
    console.log(loginForm);
    if (this.isLoginMode){
      this.authObsv = this.authService.loginWithEmailPassword ({
        email, password,
        returnSecureToken: false
      });
    }
  }
  onClear() {
    this.loginForm.reset();
  }
}
