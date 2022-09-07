import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WizardRoutingModule } from './wizard-routing.module';
import { WizardComponent } from './wizard.component';
import { UserComponent } from './components/user/user.component';
import { CarComponent } from './components/car/car.component';
import { AddressComponent } from './components/address/address.component';
import { ComponentsModule } from '../common/components/components.module';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';

@NgModule({
  declarations: [
    WizardComponent,
    UserComponent,
    CarComponent,
    AddressComponent,
  ],
  imports: [CommonModule, WizardRoutingModule, ComponentsModule],
})
export class WizardModule {}
