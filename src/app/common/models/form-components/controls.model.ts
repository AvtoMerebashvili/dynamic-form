import { DropdownControl } from './dropdown-control.model';
import { RadioControl } from './radio-control.model';
import { TextControl } from './text-control.model';

export class Controls {
  constructor(controls: ControlsType[][]) {
    return controls;
  }
}

export type ControlsType = RadioControl | TextControl | DropdownControl;
