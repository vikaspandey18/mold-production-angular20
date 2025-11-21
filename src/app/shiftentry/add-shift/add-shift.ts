import { Component, inject } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-shift',
  standalone: true,
  imports: [Navbar, ReactiveFormsModule, CommonModule],
  providers: [DatePipe],
  templateUrl: './add-shift.html',
  styleUrl: './add-shift.css',
})
export class AddShift {
  private datePipe = inject(DatePipe);
  private fb = inject(FormBuilder);

  private entryDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd')!;

  shiftform = this.fb.group({
    enterDate: [this.entryDate, [Validators.required]],
    shiftNo: ['', [Validators.required]],
    machineNo: ['', [Validators.required]],
    operator: ['', [Validators.required]],
    engineer: ['', [Validators.required]],
    supervisor: ['', [Validators.required]],
    closeShift: [false],
    closeBatch: [false],
    batch: ['', [Validators.required]],
    mold: ['', [Validators.required]],
    productCode: ['', [Validators.required]],
    productDescription: [{ value: '', disabled: true }],
    partWt: [''],
    colour: [''],
    cycleTime: [''],
    cavityActual: [''],
    expectedProductionQty: [''],
    shotCounter: [''],
    productionQty: [''],
    rejectionQty: [''],
    totalMachineDowntimeHr: [''],
    remark: [''],
    downtimeEntries: this.fb.array([]),
    rejectionEntries: this.fb.array([]),
  });

  onSubmit() {
    console.log(this.shiftform.value);
  }

  // Getter to access the shiftNo form control from the template
  get shiftNo() {
    return this.shiftform.get('shiftNo');
  }

  get machineNo() {
    return this.shiftform.get('machineNo');
  }

  get operator() {
    return this.shiftform.get('operator');
  }

  get engineer() {
    return this.shiftform.get('engineer');
  }

  get supervisor() {
    return this.shiftform.get('supervisor');
  }

  get mold() {
    return this.shiftform.get('mold');
  }

  get productCode() {
    return this.shiftform.get('productCode');
  }

  // Getter for easy access to the FormArray in the template
  get downtimeEntries() {
    return this.shiftform.get('downtimeEntries') as FormArray;
  }

  get rejectionEntries() {
    return this.shiftform.get('rejectionEntries') as FormArray;
  }

  // Creates a new FormGroup for a downtime entry
  newDowntimeEntry(): FormGroup {
    return this.fb.group({
      startTime: [''],
      stopTime: [''],
      downTime: [{ value: '', disabled: true }], // This can be a calculated field
      downtimeCode: ['', Validators.required],
      reason: [''],
    });
  }

  // creates a new FormGroup for a rejection entry

  newRejectionEntry(): FormGroup {
    return this.fb.group({
      rejectionCode: ['', Validators.required],
      rejectionReason: [''],
      rejectionEntryQty: ['', Validators.required],
    });
  }

  // Adds a new downtime entry to the FormArray
  addDowntimeEntry() {
    this.downtimeEntries.push(this.newDowntimeEntry());
  }

  // Removes a downtime entry from the FormArray at a given index
  removeDowntimeEntry(index: number) {
    this.downtimeEntries.removeAt(index);
  }

  addRejectionEntry() {
    this.rejectionEntries.push(this.newRejectionEntry());
  }

  removeRejectionEntry(index: number) {
    this.rejectionEntries.removeAt(index);
  }
}
