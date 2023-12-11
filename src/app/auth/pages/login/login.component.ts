import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { AuthService, IAuthResData } from '../../auth.service';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  authObsv: Observable<IAuthResData> | any;
  isLoginMode = true;
  errorMsg: string | null = null;
  subscription!: Subscription;
  loginForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  onSubmit(form: NgForm) {
    const loginForm = form.value;
    const { email, password } = form.value;
    if (!form.valid || !email || !password) return;
    console.log(loginForm);
  }
  onClear() {
    this.loginForm.reset();
  }
}
