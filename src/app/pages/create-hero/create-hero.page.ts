import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from '../../models/hero.model';
import { HeroesService } from '../../services/heroes.service.ts/heroes.service';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Route } from 'src/app/models/route.enum';

@Component({
  selector: 'alza-create-hero',
  templateUrl: './create-hero.page.html',
  styleUrls: ['./create-hero.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateHeroPage {
  Route = Route;
  constructor(
    private readonly heroesService: HeroesService,
    private readonly router: Router
  ) {}
  onFormSubmit(hero: Partial<Hero>): void {
    this.heroesService.createHero(hero).pipe(take(1)).subscribe();
    this.router.navigateByUrl(Route.HeroList);
  }
}
