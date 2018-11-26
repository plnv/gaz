import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { combineLatest } from 'rxjs';
import { Set } from '../../set/set';
import { SetService } from '../../set/set.service';
import { Param } from '../param';
import { ParamAddComponent } from '../param-add/param-add.component';
import { ParamService } from '../param.service';

@Component({
  selector: 'app-param',
  templateUrl: './param.component.html',
  styleUrls: ['./param.component.scss'],
  providers: [ParamService, SetService]
})
export class ParamComponent implements OnInit {

  params: Param[];
  sets: Set[];

  constructor(private paramService: ParamService, private setService: SetService, private dialog: MatDialog) {
  }

  ngOnInit() {
    const all = combineLatest(
      this.paramService.getAll(),
      this.setService.getAll(),
    );

    all.subscribe(data => {
      if (data && data[0] && data[1]) {
        const params = data[0];
        this.sets = data[1];
        this.params = [];
        params.forEach(i => this.setParam(i));
      }
    });
  }

  setParam(param: Param) {
    param._set = this.sets.filter((j: Set) => j.id === param.data.gset)[0].data;
    this.params.push(param);
  }

  save(data: Param) {
    const param = { ...data };
    if (param._set) {
      delete param._set;
    }
    this.paramService.patch(param).subscribe();
  }

  deleteParam(index: number) {
    const param: Param = this.params[index];
    this.paramService.delete(param.id).subscribe(
      data => this.params.splice(index, 1)
    );
  }

  addNew() {
    const dialogRef = this.dialog.open(ParamAddComponent, { data: { sets: this.sets } });
    dialogRef.componentInstance.emmiter.subscribe(value => {
      this.paramService.post(value).subscribe(
        data => {
          this.setParam(data);
          dialogRef.close();
        }
      );
    });
  }

}
