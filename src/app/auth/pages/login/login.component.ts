import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { AuthService, AuthResData } from '../../auth.service';
import { Router } from '@angular/router';
import { Observable, Subscription, map } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isAuthenticated = false;
  hasSubmitted!: boolean;
  isLoginMode = true;
  loginForm: any;
  errorMsg: string | null = null;
  isLoading = false;
  authObsv: Observable<AuthResData> | any;
  LoginWithEmailPassword: any;

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  get name(){
    return this.loginForm.get('name');
  }

  private userSub!: Subscription;

  constructor(
    private afAuth: AngularFireAuth,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', [Validators.required, Validators.minLength(4)]],
    });
    this.userSub = this.authService.currUser.subscribe((user) => {
      this.isAuthenticated = !!user;
      console.log(!user);
    });
  }

  onSubmit(form: NgForm) {
    this.isLoading = true;
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;
    const name = document.getElementById('name') as HTMLInputElement;

    let requestData = {
      email: email.value,
      name: name.value,
      password: password.value,
      returnSecureToken: true
    };

    // this.authObsv = this.authService.LoginWithEmailPassword(requestData)
    //   ?.subscribe((response: any) => {
    //     this.LoginWithEmailPassword = response
    //   });
      // this.isLoading = false;
      //   email.value = '';
      //   password.value = '';
      //   name.value = '';
      // catch((error: { message: any }) => {
      //   this.isLoading = false;
      //   alert(error.message);
      // });
  }
  onClear() {
    this.loginForm.reset();
  }
}
