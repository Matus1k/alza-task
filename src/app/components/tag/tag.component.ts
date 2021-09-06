import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'alza-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagComponent {
  @Input() title: string = '';
}
