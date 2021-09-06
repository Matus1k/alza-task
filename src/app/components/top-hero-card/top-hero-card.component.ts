import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Hero } from '../../models/hero.model';

@Component({
  selector: 'alza-top-hero-card',
  templateUrl: './top-hero-card.component.html',
  styleUrls: ['./top-hero-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopHeroCardComponent implements OnInit {
  @Input() hero: Hero | undefined;

  ngOnInit() {
    if (this.hero) {
      console.log(this.hero.tags);
    }
  }
}
