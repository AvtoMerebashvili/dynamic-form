import { Options } from '../../interfaces/options.interface';
import { BaseFormControl } from './base-form-control.model';

export class BaseOptionableControl extends BaseFormControl {
  options: Options[];
  constructor(options: Options[], controlName: string) {
    super(controlName);
    this.options = options;
  }
}
