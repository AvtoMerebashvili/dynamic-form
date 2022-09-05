import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [DropdownComponent],
  imports: [CommonModule, MatSelectModule],
  exports: [DropdownComponent],
})
export class DropdownModule {}
