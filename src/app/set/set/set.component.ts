import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatChipInputEvent, MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { SetAddComponent } from '../set-add/set-add.component';
import { SetService } from '../set.service';
import { Set } from '../set';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss'],
  providers: [SetService]
})
export class SetComponent implements OnInit {

  sets: Set[];
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private service: SetService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.service.getAll().subscribe(data => this.sets = data);
  }


  add(event: MatChipInputEvent, index: number): void {
    const input = event.input;
    const value = event.value;
    const set: Set = this.sets[index];

    if ((value || '').trim()) {
      set.data.push(value.trim());
    }

    if (input) {
      input.value = '';
    }

    this.service.patch(set).subscribe();
  }

  remove(value: string, index: number): void {
    const set: Set = this.sets[index];
    const indexOf = set.data.indexOf(value);

    if (indexOf >= 0) {
      set.data.splice(indexOf, 1);
    }

    this.service.patch(set).subscribe();
  }

  addNew() {
    const dialogRef = this.dialog.open(SetAddComponent);
    dialogRef.componentInstance.emmiter.subscribe(value => {
      this.service.post(value).subscribe(
        data => {
          this.sets.push(data);
          dialogRef.close();
        }
      );
    });
  }


  deleteSet(index: number) {
    const set: Set = this.sets[index];
    this.service.delete(set.id).subscribe(
      data => this.sets.splice(index, 1)
    );
  }

}
