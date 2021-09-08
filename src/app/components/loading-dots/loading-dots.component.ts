import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'alza-loading-dots',
  templateUrl: './loading-dots.component.html',
  styleUrls: ['./loading-dots.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingDotsComponent {}
