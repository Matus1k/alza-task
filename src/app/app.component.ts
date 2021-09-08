import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroesService } from './services/heroes.service.ts/heroes.service';

@Component({
  selector: 'alza-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private readonly heroService: HeroesService) {
    this.heroService.getHeroesRequest().subscribe();
  }
}
