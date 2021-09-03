import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'alza-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
