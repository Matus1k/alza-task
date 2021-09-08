import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Hero } from '../../models/hero.model';
import { HeroesService } from '../../services/heroes.service.ts/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  filter,
  map,
  startWith,
  switchMap,
  take,
  takeUntil,
} from 'rxjs/operators';
import { Route } from '../../models/route.enum';

@Component({
  selector: 'alza-hero-detail-page',
  templateUrl: './hero-detail.page.html',
  styleUrls: ['./hero-detail.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroDetailPage implements OnInit, OnDestroy {
  hero$: Observable<Hero>;
  warning = false;
  editMode = false;
  loading$ = new Observable<boolean>().pipe(startWith(true));

  constructor(
    private heroesService: HeroesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.loading$ = this.heroesService.getLoading();
    this.hero$ = new Observable<Hero>();
    const heroId = this.route.snapshot.paramMap.get('id');
    if (heroId) {
      this.hero$ = this.heroesService.getHeroes().pipe(
        map((heroes) => heroes.filter((hero) => hero.id === parseInt(heroId))),
        map((heroes) => heroes[0])
      );
    }
  }

  private readonly unsubscribe$ = new Subject();

  ngOnInit(): void {}

  deleteHero(): void {
    if (this.warning) {
      this.hero$
        .pipe(
          switchMap(
            (hero: Hero): Observable<any> =>
              this.heroesService.deleteHero(hero.id)
          ),
          take(1)
        )
        .subscribe();
      this.router.navigateByUrl('/' + Route.Home);
    } else {
      this.warning = true;
    }
  }

  heroFormSubmit(hero: Hero): void {
    this.heroesService
      .editHero(hero)
      .pipe(takeUntil(this.unsubscribe$.asObservable()))
      .subscribe();
    this.editMode = false;
  }

  editModeToggle(): void {
    this.editMode = !this.editMode;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
