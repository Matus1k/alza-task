import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'alza-hero-list-page',
  templateUrl: './hero-list.page.html',
  styleUrls: ['./hero-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroListPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
