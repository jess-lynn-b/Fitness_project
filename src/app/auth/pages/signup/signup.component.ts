import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, AuthResData } from '../../auth.service';
import { Observable, Subscription } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  isAuthenticated = false;
  hasSubmitted!: boolean;
  signupForm: FormGroup | any;
  authObsv: Observable<AuthResData> | any;
  isSignupMode = true;
  errorMsg: string | null = null;
  isLoading = false;

  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }

  private userSub!: Subscription;

  constructor(
    private afAuth: AngularFireAuth,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit() {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
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

    this.afAuth.createUserWithEmailAndPassword(email.value, password.value)
    .then (() => {
      this.isLoading = false;
      email.value = '';
      password.value = '';
    })
    .catch(error => {
      this.isLoading = false;
      alert(error.message);
    });
  }
  onClear(){
    this.signupForm.reset();
  }
}
