import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService, IAuthResData } from '../../auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  authObsv: Observable<IAuthResData> | any;
  loginForm;
  isLoginMode = true;
  errorMsg: string | null = null;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  onSubmit() {
    console.log(this.loginForm.value);
    const { email, password } = this.loginForm.value;
    if (!this.loginForm.valid || !email || !password) return;

    if (this.isLoginMode) {
      this.authObsv = this.authService.login({
        email,
        password,
      });
    } else {
      this.authObsv = this.authService.signup({
        email,
        password,
      });
    }
    this.authObsv.subscribe({
      next: (data: any) => {
        console.log(data);
        this.router.navigate(['Dashboard']);
      },

      error: (res: HttpErrorResponse) => {
        console.log(res);
        this.errorMsg = res?.error?.error?.message || 'Something went wrong!';
      },
    });
  }
}
