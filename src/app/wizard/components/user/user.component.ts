import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Options } from 'src/app/common/interfaces/options.interface';
import { Controls } from 'src/app/common/models/form-components/controls.model';
import { DropdownControl } from 'src/app/common/models/form-components/dropdown-control.model';
import { RadioControl } from 'src/app/common/models/form-components/radio-control.model';
import { TextControl } from 'src/app/common/models/form-components/text-control.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  sexOptions: Options[] = [
    {
      view: 'მამაკაცი',
      value: 1,
    },
    {
      view: 'ქალი',
      value: 0,
    },
  ];

  nationOptions: Options[] = [
    {
      view: 'ქართველი',
      value: 1,
    },
    {
      view: 'უცხოეული',
      value: 0,
    },
  ];

  form = new FormGroup({
    name: new FormControl(),
    surname: new FormControl(),
    sex: new FormControl(),
    nation: new FormControl(),
  });

  controls = new Controls([
    [new TextControl('name', 'სახელი'), new TextControl('surname', 'გვარი')],
    [new RadioControl('sex', 'სქესი', this.sexOptions)],
    [new DropdownControl('nation', 'ეროვნება', this.nationOptions)],
  ]);

  constructor() {}
}
