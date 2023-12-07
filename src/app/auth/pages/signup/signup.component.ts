import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { formGroup } from 'src/app/shared/models/formGroup.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm;


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private routes: Router
  ) {
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['',[Validators.required,Validators.maxLength(15)]],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]],
      height: ['', [Validators.required]],
      currWeight: ['', [Validators.required]],
      goalWeight: ['', [Validators.required]]
    });
  }
  get firstName(){
    return this.signupForm.get('firstName');
  }
  get lastName(){
    return this.signupForm.get('lastName');
  }
  get email(){
    return this.signupForm.get('email');
  }
  get password(){
    return this.signupForm.get('password');
  }
  get height(){
    return this.signupForm.get('height');
  }
  get currWeight(){
    return this.signupForm.get('weight');
  }
  get goalWeight(){
    return this.signupForm.get('goalWeight');
  }


  onSubmit() {
   console.log(this.signupForm.value);
  }
}

