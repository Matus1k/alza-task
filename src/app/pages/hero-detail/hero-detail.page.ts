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
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'alza-hero-detail-page',
  templateUrl: './hero-detail.page.html',
  styleUrls: ['./hero-detail.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroDetailPage implements OnInit, OnDestroy {
  hero: Hero | undefined;
  constructor(
    private heroesService: HeroesService,
    private route: ActivatedRoute,
    private ref: ChangeDetectorRef
  ) {}

  private readonly unsubscribe$ = new Subject();

  ngOnInit(): void {
    const heroId = this.route.snapshot.paramMap.get('id');
    if (heroId) {
      this.heroesService
        .getHero(parseInt(heroId))
        .pipe(takeUntil(this.unsubscribe$.asObservable()))
        .subscribe((hero) => {
          console.log(hero);
          this.hero = hero;
          this.ref.markForCheck();
        });
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
