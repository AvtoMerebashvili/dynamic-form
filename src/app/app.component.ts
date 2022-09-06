import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Controls } from './common/models/form-components/controls.model';
import { DropdownControl } from './common/models/form-components/dropdown-control.model';
import { RadioControl } from './common/models/form-components/radio-control.model';
import { TextControl } from './common/models/form-components/text-control.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dynamic-form';

  options = [
    { value: 1, view: 'ფირსტ' },
    { value: 2, view: 'სეკონდ' },
  ];

  form = new FormGroup({
    a: new FormControl(''),
    b: new FormControl(''),
    c: new FormControl(''),
    e: new FormControl(''),
    f: new FormControl(''),
  });

  controls = new Controls([
    [new TextControl('a', 'ჰელუს'), new TextControl('b', 'buhhh')],
    [new RadioControl('pasadas', this.options, 'c')],
    [
      new DropdownControl('asdas', this.options, 'e'),
      new TextControl('c', 'fgasdf'),
    ],
  ]);
}
