import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, IAuthResData } from '../../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {

  loading = false;
  authObsv!: Observable<IAuthResData>;
  signupForm: any;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
  ) {

    this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(form: NgForm) {
    const {firstName, lastName, email, password} = form.value;
    console.log(form.value);
    if( !form.valid || !firstName || !lastName || !email || !email) return;

    if (this.signupForm.invalid) {
      console.log(this.signupForm.errors);
    } else {
      this.authObsv = this.authService.signup({
        firstName,
        lastName,
        email,
        password
      });
    }
    this.authObsv.subscribe({
      next: (data) => {
        console.log(data);
      }
    })
  };
}
