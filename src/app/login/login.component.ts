import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private formBuilder: FormBuilder,
  ) {}

  loginForm = this.formBuilder.group({
    email: this.formBuilder.control('', [
      Validators.required,
      Validators.email
    ]),
    password: this.formBuilder.control('', [
      Validators.required
    ]),
  })

  hide = true
}
