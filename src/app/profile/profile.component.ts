import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfileUserModel } from '../shared/models/profile_user.model';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../auth/services/user.service';
import { ProfileModel } from '../shared/models/profile.model';
import { TrackerComponent } from '../data-tracker/tracker/tracker.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  form: FormGroup;
  user: ProfileUserModel;
  info: ProfileModel
  isProfileEmpty: boolean;
  apiAction: string;
  isLoading: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
  ) {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      currWeight: '',
      targetWeight: '',
      estTime: '',
    })
    this.info = {
      currWeight: '',
      targetWeight: '',
      estTime: '',
    };
    this.user = {
      username: '',
      id: '',
      isactive: false,
    };
    this.isProfileEmpty = true;
    this.isLoading = true;
    this.apiAction = '';
  }
  ngOnInit() {
    this.userService.get().subscribe((data: ProfileUserModel) => {
      this.user = data;
    });

  }
  currWeight(){
    // this.form.currWeight((data: TrackerComponent) => {
    //   this.currWeight
    // })
  }
  WeightUpdate(){
    this.info.currWeight;
    console.log(this.currWeight);
  }
  logout(): void {
    this.authService.logout();
  }
}
