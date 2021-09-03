import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'alza-hero-detail-page',
  templateUrl: './hero-detail.page.html',
  styleUrls: ['./hero-detail.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroDetailPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
