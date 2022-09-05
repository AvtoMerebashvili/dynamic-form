import { Options } from '../../interfaces/options.interface';
import { BaseOptionableControl } from './base-optionable.model';

export class DropdownControl extends BaseOptionableControl {
  label: string;
  constructor(label: string, options: Options[], controlName: string) {
    super(options, controlName);
    this.label = label;
  }
}
