import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Route } from 'src/app/models/route.enum';
import { Hero } from '../../models/hero.model';
import { HeroesService } from '../../services/heroes.service.ts/heroes.service';
import { map, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'alza-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage implements OnInit {
  topHeroes$ = new Observable<Hero[]>();
  loading$ = new Observable<boolean>().pipe(startWith(true));
  readonly Route = Route;

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.topHeroes$ = this.heroesService
      .getHeroes()
      .pipe(map((heroes) => heroes.filter((hero) => hero.top)));
    this.loading$ = this.heroesService.getLoading();
  }
}
