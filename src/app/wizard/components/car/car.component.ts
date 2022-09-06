import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Options } from 'src/app/common/interfaces/options.interface';
import { Controls } from 'src/app/common/models/form-components/controls.model';
import { DropdownControl } from 'src/app/common/models/form-components/dropdown-control.model';
import { RadioControl } from 'src/app/common/models/form-components/radio-control.model';
import { TextControl } from 'src/app/common/models/form-components/text-control.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarComponent {
  modelOptions: Options[] = [
    {
      view: 'Volt',
      value: 1,
    },
    {
      view: 'Ford',
      value: 2,
    },
    {
      view: 'Toyota',
      value: 2,
    },
  ];

  stateOptions: Options[] = [
    {
      view: 'ახალი',
      value: 1,
    },
    {
      view: 'მეორადი',
      value: 2,
    },
  ];

  doors: Options[] = [
    {
      view: '1',
      value: 1,
    },
    {
      view: '2',
      value: 2,
    },
    {
      view: '4',
      value: 4,
    },
    {
      view: '5',
      value: 5,
    },
  ];

  form = new FormGroup({
    model: new FormControl(''),
    name: new FormControl(''),
    state: new FormControl(),
    doors: new FormControl(),
  });

  controls = new Controls([
    [new DropdownControl('model', 'მოდელი', this.modelOptions)],
    [
      new TextControl('name', 'სახელი'),
      new RadioControl('state', 'მდგომარეობა', this.stateOptions),
    ],
    [new DropdownControl('doors', 'კარების რაოდენობა', this.doors)],
  ]);

  constructor() {}
}
