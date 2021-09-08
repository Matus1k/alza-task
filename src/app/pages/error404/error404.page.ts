import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '../../models/route.enum';

@Component({
  selector: 'alza-error404',
  templateUrl: './error404.page.html',
  styleUrls: ['./error404.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Error404Page {
  constructor(private readonly router: Router) {}

  redirect(): void {
    this.router.navigateByUrl(Route.Home);
  }
}
