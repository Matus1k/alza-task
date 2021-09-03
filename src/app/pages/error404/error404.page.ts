import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'alza-error404',
  templateUrl: './error404.page.html',
  styleUrls: ['./error404.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Error404Page implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
