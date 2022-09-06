import { CONTROL } from '../../enums/control.enum';

export class BaseFormControl {
  controlName: string;
  type: CONTROL;
  constructor(controlName: string, type: CONTROL) {
    this.controlName = controlName;
    this.type = type;
  }
}
