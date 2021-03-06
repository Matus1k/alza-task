import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { HeroesService } from '../../services/heroes.service.ts/heroes.service';
import { Observable, Subject } from 'rxjs';
import { Hero } from '../../models/hero.model';
import { Route } from '../../models/route.enum';
import { startWith, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'alza-hero-list-page',
  templateUrl: './hero-list.page.html',
  styleUrls: ['./hero-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroListPage implements OnDestroy {
  heroes: Hero[] = [];
  chosenHero: Hero | undefined;

  private readonly unsubscribe$ = new Subject();

  readonly Route = Route;
  constructor(
    private readonly heroesService: HeroesService,
    readonly ref: ChangeDetectorRef
  ) {
    this.heroesService
      .getHeroes()
      .pipe(takeUntil(this.unsubscribe$.asObservable()))
      .subscribe((heroes) => {
        this.heroes = heroes;
        this.chosenHero = heroes[0];
        this.ref.markForCheck();
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  changeChosenHero(id: number): void {
    this.chosenHero = this.heroes.find((hero) => hero.id === id);
  }
}
