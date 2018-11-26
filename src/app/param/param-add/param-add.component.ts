import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Param } from '../param';

@Component({
  selector: 'app-param-add',
  templateUrl: './param-add.component.html',
  styleUrls: ['./param-add.component.scss']
})
export class ParamAddComponent {

  form: FormGroup;

  @Output() emmiter: EventEmitter<Param> = new EventEmitter<Param>();

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.form = fb.group({
      id: null,
      data: fb.group({
        gset: null,
        values: [[]]
      })
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value)
      this.emmiter.emit(this.form.value);
    }
  }

}
