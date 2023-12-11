import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, IAuthResData } from '../../auth.service';
import { formGroup } from 'src/app/shared/models/formGroup.model';
import { Observable, Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  [x: string]: any;
  signupForm: any;
  authObsv: Observable<IAuthResData> | any;
  isSignupMode = true;
  errorMsg: string | null = null;
  subscription!: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit() {
    this.signupForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      height: new FormControl('', [Validators.required]),
      currWeight: new FormControl('', [Validators.required]),
      goalWeight: new FormControl('', [Validators.required]),
    });
  }
  get firstName() {
    return this.signupForm.get('firstName');
  }
  get lastName() {
    return this.signupForm.get('lastName');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get height() {
    return this.signupForm.get('height');
  }
  get currWeight() {
    return this.signupForm.get('weight');
  }
  get goalWeight() {
    return this.signupForm.get('goalWeight');
  }

  onSubmit(form: NgForm) {
    const signupForm = form.value;
    const { email, password } = form.value;
    console.log(this.signupForm.value);
    if (!form.valid || !email || !password) return;

  }
  onClear() {
    this.signupForm.reset();
  }
}


