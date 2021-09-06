import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Route } from 'src/app/models/route.enum';
import { Hero } from '../../models/hero.model';
import { HeroesService } from '../../services/heroes.service.ts/heroes.service';

@Component({
  selector: 'alza-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage implements OnInit {
  topHeroes$: Observable<Hero[]>;
  readonly Route = Route;

  constructor(private heroesService: HeroesService) {
    this.topHeroes$ = new Observable<Hero[]>();
  }

  ngOnInit(): void {
    this.topHeroes$ = this.heroesService.getTopHeroes();
  }
}
