import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfileUserModel } from '../shared/models/profile_user.model';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../auth/services/user.service';
import { ProfileModel } from '../shared/models/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  form: FormGroup;
  user: ProfileUserModel;
  isProfileEmpty: boolean;
  apiAction: string;
  isLoading: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authService: AuthService
  ) {
    this.form = formBuilder.group({
      name: '',
      email: '',
      Weight: '',
      targetWeight: '',
      estTime: '',
    });
    this.user = {
      name: '',
      id: '',
      isactive: false,
    };
    this.isProfileEmpty = true;
    this.isLoading = true;
    this.apiAction = '';
  }
  ngOnInit() {
    this.userService.getMe().subscribe((data: ProfileUserModel) => {
      this.user = data;
    });
  
  }
  logout(): void {
    this.authService.logout();
  }
}
