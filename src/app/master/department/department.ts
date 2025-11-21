import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-department',
  imports: [Navbar, ReactiveFormsModule],
  templateUrl: './department.html',
  styleUrl: './department.css',
})
export class Department {
  form = new FormGroup({
    departmentCode: new FormControl('', {
      validators: [Validators.required],
    }),
    departmentName: new FormControl('', {
      validators: [Validators.required],
    }),
    plantCode: new FormControl('', {
      validators: [Validators.required],
    }),
    status: new FormControl('', {
      validators: [Validators.required],
    }),
    sortBy: new FormControl('', {
      validators: [Validators.required],
    }),
  });

  onSubmit() {
    console.log(this.form.value);
    setTimeout(() => {
      this.closeModal();
      this.form.reset();
    }, 2000);
  }

  closeModal() {
    const button = document.getElementById('closeModalBtn');
    button?.click();
  }
}
