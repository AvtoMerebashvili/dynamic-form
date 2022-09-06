import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';
import { Step } from '../common/interfaces/step.interface';
import { filter, tap, map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { wizardSteps } from './constant/wizard-steps.constant';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WizardComponent implements OnInit {
  steps$: Observable<Step[]> = of([]);

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.steps$ = of(this.handleOptions(this.router.url, wizardSteps));
    this.handleRouteChanges();
  }

  handleRouteChanges() {
    this.router.events
      .pipe(
        filter((route) => route instanceof NavigationEnd),
        map((route: NavigationEnd | any) =>
          this.handleOptions(route.url, wizardSteps)
        ),
        tap((steps) => (this.steps$ = of(steps)))
      )
      .subscribe();
  }

  handleOptions(route: string, steps: Step[]) {
    const url = route.split('/');
    const currentStep = steps.filter(
      (step: Step) => step.routerLink === url[2]
    );
    if (currentStep.length) {
      currentStep[0].active = true;
      return steps
        .map((step: Step) => {
          return {
            ...step,
            active: false,
          };
        })
        .filter((step: Step) => step.routerLink !== url[2])
        .concat(currentStep)
        .sort((a, b) => a.id - b.id);
    } else {
      return steps
        .map((step: Step) => {
          return {
            ...step,
            active: false,
          };
        })
        .filter((step: Step) => step.routerLink !== url[2])
        .sort((a, b) => a.id - b.id);
    }
  }

  onStepChange(routerLink: string) {
    this.router.navigate([routerLink], { relativeTo: this.route });
  }
}
