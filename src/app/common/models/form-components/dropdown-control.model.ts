import { CONTROL } from '../../enums/control.enum';
import { Options } from '../../interfaces/options.interface';
import { BaseOptionableControl } from './base-optionable.model';

export class DropdownControl extends BaseOptionableControl {
  label: string;
  constructor(controlName: string, label: string, options: Options[]) {
    super(options, controlName, CONTROL.Dropdown);
    this.label = label;
  }
}
