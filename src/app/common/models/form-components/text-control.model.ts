import { CONTROL } from '../../enums/control.enum';
import { BaseFormControl } from './base-form-control.model';

export class TextControl extends BaseFormControl {
  label: string;
  constructor(controlName: string, label: string) {
    super(controlName, CONTROL.Text);
    this.label = label;
  }
}
