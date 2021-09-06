import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service.ts/heroes.service';
import { Observable } from 'rxjs';
import { Hero } from '../../models/hero.model';
import { Route } from '../../models/route.enum';

@Component({
  selector: 'alza-hero-list-page',
  templateUrl: './hero-list.page.html',
  styleUrls: ['./hero-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroListPage implements OnInit {
  heroes$: Observable<Hero[]>;
  readonly Route = Route;
  constructor(private heroesService: HeroesService) {
    this.heroes$ = new Observable<Hero[]>();
  }

  ngOnInit(): void {
    this.heroes$ = this.heroesService.getHeroes();
  }
}
