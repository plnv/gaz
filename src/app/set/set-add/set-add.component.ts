import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Set } from '../set';

@Component({
  selector: 'app-set-add',
  templateUrl: './set-add.component.html',
  styleUrls: ['./set-add.component.scss']
})
export class SetAddComponent {

  form: FormGroup;

  @Output() emmiter: EventEmitter<Set> = new EventEmitter<Set>();

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      id: null,
      comment: null,
      data: [[]]
    })
  }

  onSubmit() {
    if (this.form.valid) {
      this.emmiter.emit(this.form.value);
    }
  }

}
