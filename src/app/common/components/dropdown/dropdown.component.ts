import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { ControlContainer, FormControl } from '@angular/forms';
import { Options } from '../../interfaces/options.interface';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent implements OnInit {
  @Input() options: Options[] = [];
  @Input() label: string = '';
  @Input() controlName: string = '';

  constructor(private cc: ControlContainer) {}

  ngOnInit(): void {}

  get control(): FormControl {
    return this.cc.control?.get(this.controlName) as FormControl;
  }
}
