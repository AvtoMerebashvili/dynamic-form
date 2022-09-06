import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DropdownComponent],
  imports: [CommonModule, MatSelectModule, ReactiveFormsModule],
  exports: [DropdownComponent],
})
export class DropdownModule {}
