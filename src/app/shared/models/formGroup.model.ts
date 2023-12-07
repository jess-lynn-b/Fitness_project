import { FormGroup, FormControl, Validators } from "@angular/forms";
export class formGroup {
  contactForm = new FormGroup ({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    height: new FormControl(),
    currWeight: new FormControl(),
    goalWeight: new FormControl()
  })
}
