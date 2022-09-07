import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form.component';
import { DropdownModule } from '../dropdown/dropdown.module';
import { InputModule } from '../input/input.module';
import { RadioModule } from '../radio/radio.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';

@NgModule({
  declarations: [DynamicFormComponent],
  imports: [
    CommonModule,
    DropdownModule,
    InputModule,
    RadioModule,
    ReactiveFormsModule,
    NgxsFormPluginModule,
  ],
  exports: [DynamicFormComponent],
})
export class DynamicFormModule {}
