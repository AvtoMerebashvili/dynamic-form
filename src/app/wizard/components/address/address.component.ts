import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Options } from 'src/app/common/interfaces/options.interface';
import { Controls } from 'src/app/common/models/form-components/controls.model';
import { DropdownControl } from 'src/app/common/models/form-components/dropdown-control.model';
import { RadioControl } from 'src/app/common/models/form-components/radio-control.model';
import { TextControl } from 'src/app/common/models/form-components/text-control.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressComponent implements OnInit {
  countries: Options[] = [
    {
      view: 'საქართველო',
      value: 1,
    },
    {
      view: 'გერმანია',
      value: 2,
    },
    {
      view: 'ნორვეგია',
      value: 3,
    },
    {
      view: 'გრენლანდია',
      value: 4,
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
    country: new FormControl(''),
    city: new FormControl(''),
    address1: new FormControl('', Validators.required),
    address2: new FormControl(),
  });

  controls = new Controls([
    [
      new DropdownControl('country', 'ქვეყანა', this.countries),
      new TextControl('city', 'ქალაქი'),
    ],
    [new TextControl('address1', 'მისამართი 1 *')],
    [new TextControl('address2', 'მისამართი 2')],
  ]);

  ngxsForm = 'address';

  constructor() {}

  ngOnInit(): void {}
}
