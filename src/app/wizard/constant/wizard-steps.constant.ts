import { Step } from 'src/app/common/interfaces/step.interface';

export const wizardSteps: Step[] = [
  {
    label: 'მომხმარებელი',
    routerLink: 'user',
    active: true,
    id: 0,
  },
  {
    label: 'მანქანა',
    routerLink: 'car',
    active: true,
    id: 1,
  },
  {
    label: 'მისამართი',
    routerLink: 'address',
    active: true,
    id: 2,
  },
];
