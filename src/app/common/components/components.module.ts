import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from './input/input.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { RadioModule } from './radio/radio.module';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [InputModule, DropdownModule, RadioModule, DynamicFormModule],
})
export class ComponentsModule {}
