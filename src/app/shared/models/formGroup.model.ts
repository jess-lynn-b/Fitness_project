import { FormGroup, FormControl } from "@angular/forms";
export class formGroup {
  contactForm = new FormGroup ({
    email: new FormControl(),
    password: new FormControl(),
  })
}
