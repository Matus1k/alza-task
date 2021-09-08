import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroesService } from './services/heroes.service.ts/heroes.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'alza-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private readonly heroService: HeroesService) {
    this.heroService.getHeroesReguest().pipe(take(1)).subscribe();
  }
}
