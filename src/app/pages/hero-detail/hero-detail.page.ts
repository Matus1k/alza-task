import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subject } from 'rxjs';
import { Hero } from '../../models/hero.model';
import { HeroesService } from '../../services/heroes.service.ts/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Route } from '../../models/route.enum';

@Component({
  selector: 'alza-hero-detail-page',
  templateUrl: './hero-detail.page.html',
  styleUrls: ['./hero-detail.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroDetailPage implements OnInit, OnDestroy {
  hero: Hero | undefined;
  warning = false;
  constructor(
    private heroesService: HeroesService,
    private route: ActivatedRoute,
    private ref: ChangeDetectorRef,
    private router: Router
  ) {}

  private readonly unsubscribe$ = new Subject();

  ngOnInit(): void {
    const heroId = this.route.snapshot.paramMap.get('id');
    if (heroId) {
      this.heroesService
        .getHero(parseInt(heroId))
        .pipe(takeUntil(this.unsubscribe$.asObservable()))
        .subscribe((hero) => {
          this.hero = hero;
          this.ref.markForCheck();
        });
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  deleteHero(): void {
    if (this.warning && this.hero) {
      this.heroesService
        .deleteHero(this.hero.id)
        .pipe(takeUntil(this.unsubscribe$.asObservable()))
        .subscribe();
      this.heroesService
        .deleteTopHero(this.hero.id)
        .pipe(takeUntil(this.unsubscribe$.asObservable()))
        .subscribe();
      this.router.navigateByUrl('/' + Route.Home);
    } else {
      this.warning = true;
    }
  }
}
