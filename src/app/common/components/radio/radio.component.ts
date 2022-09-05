import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { ControlContainer, FormControl } from '@angular/forms';
import { Options } from '../../interfaces/options.interface';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioComponent implements OnInit {
  @Input() options: Options[] = [];
  @Input() label: string = '';
  @Input() controlName: string = '';

  constructor(private cc: ControlContainer) {}

  ngOnInit(): void {}

  get control(): FormControl {
    return this.cc.control?.get(this.controlName) as FormControl;
  }
}
