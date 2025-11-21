import { Component, inject } from '@angular/core';
import { Navbar } from '../shared/navbar/navbar';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shiftentry',
  imports: [Navbar, ReactiveFormsModule, RouterLink],
  providers: [DatePipe],
  templateUrl: './shiftentry.html',
  styleUrl: './shiftentry.css',
})
export class Shiftentry {
  private datePipe = inject(DatePipe);

  private fromdate = this.datePipe.transform(new Date(), 'yyyy-MM-dd')!;
  private today = this.datePipe.transform(new Date(), 'yyyy-MM-dd')!;

  form = new FormGroup({
    fromDate: new FormControl(this.fromdate, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    toDate: new FormControl(this.today, {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  onSubmit() {
    console.log(this.form.value.fromDate);
    console.log(this.form.value.toDate);
  }
}
