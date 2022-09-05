import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioComponent } from './radio.component';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [RadioComponent],
  imports: [CommonModule, MatRadioModule],
  exports: [RadioComponent],
})
export class RadioModule {}
