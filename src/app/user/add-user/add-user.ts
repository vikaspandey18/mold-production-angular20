import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../shared/navbar/navbar';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [Navbar, ReactiveFormsModule, CommonModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css',
  // Make sure you have a corresponding CSS file or remove this line
  // styleUrl: './add-user.css',
})
export class AddUser {
  private fb = inject(FormBuilder);

  userForm = this.fb.group({
    name: ['', Validators.required],
    mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    role: ['', Validators.required],
  });

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Submitted!', this.userForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  // Getter for easy access to the mobile form control in the template
  get mobile() {
    return this.userForm.get('mobile');
  }
}
