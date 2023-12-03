import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService
  ) {}
  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    //reset alerts on submit
    this.alertService.clear();
    //stop if form is invalid
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
        error: (error: string) => {
          this.alertService.error(error);
          this.loading = false;
        }
  };
}
