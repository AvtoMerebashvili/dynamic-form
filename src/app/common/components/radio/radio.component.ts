import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioComponent implements OnInit {
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  constructor() {}

  ngOnInit(): void {}
}
