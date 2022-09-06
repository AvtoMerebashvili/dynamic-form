import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './components/address/address.component';
import { CarComponent } from './components/car/car.component';
import { UserComponent } from './components/user/user.component';
import { WizardComponent } from './wizard.component';

const routes: Routes = [
  {
    path: '',
    component: WizardComponent,
    children: [
      { path: 'user', component: UserComponent },
      { path: 'car', component: CarComponent },
      { path: 'address', component: AddressComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WizardRoutingModule {}
