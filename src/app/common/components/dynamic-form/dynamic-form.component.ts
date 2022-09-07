import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CONTROL } from '../../enums/control.enum';
import { Controls } from '../../models/form-components/controls.model';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormComponent {
  @Input() form: FormGroup = new FormGroup({});
  @Input() controls: Controls = [];
  @Input() ngxsForm: any;

  CONTROL = CONTROL;

  constructor() {}

  asString(item: any) {
    return item as string;
  }

  asArray(item: any) {
    return item as any[];
  }
}
