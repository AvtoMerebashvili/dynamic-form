import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { ControlContainer, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @Input() label: string = '';
  @Input() controlName: string = '';

  constructor(private cc: ControlContainer) {}

  get control(): FormControl {
    return this.cc.control?.get(this.controlName) as FormControl;
  }
}
