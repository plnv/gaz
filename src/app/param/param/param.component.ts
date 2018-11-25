import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { combineLatest } from 'rxjs';
import { Set } from '../../set/set';
import { SetService } from '../../set/set.service';
import { Param } from '../param';
import { ParamService } from '../param.service';

@Component({
  selector: 'app-param',
  templateUrl: './param.component.html',
  styleUrls: ['./param.component.scss'],
  providers: [ParamService, SetService]
})
export class ParamComponent implements OnInit {

  params: Param[];

  constructor(private paramService: ParamService, private setService: SetService, private dialog: MatDialog) {
  }

  ngOnInit() {
    const all = combineLatest(
      this.paramService.getAll(),
      this.setService.getAll(),
    );

    all.subscribe(data => {
      if (data) {
        const params = data[0];
        const sets = data[1];

        this.params = params.map((i: Param) => {
          i._set = sets.filter((j: Set) => j.id === i.data.gset)[0].data;
          return i;
        });
      }
    });
  }

  save(data: Param) {
    this.paramService.patch(data).subscribe();
  }

}
