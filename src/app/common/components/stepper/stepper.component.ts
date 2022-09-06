import {
  Component,
  OnInit,
  OnChanges,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Step } from '../../interfaces/step.interface';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperComponent implements OnInit, OnChanges {
  @Input() steps$: Observable<Step[]> = of([]);
  @Output() stepChanged = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {}

  onStepClick(routerLink: string) {
    this.stepChanged.emit(routerLink);
  }
}
