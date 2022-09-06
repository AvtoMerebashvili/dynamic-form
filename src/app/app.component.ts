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
export class AppComponent {}
