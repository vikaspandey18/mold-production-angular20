import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private router: Router) {}

  loginForm = new FormGroup({
    mobileNumber: new FormControl('7757842326'),
    password: new FormControl('123456789'),
  });

  onSubmit() {
    console.log(this.loginForm.value);
    this.router.navigate(['/dashboard'], {
      replaceUrl: true,
    });
  }
}
