import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Route } from 'src/app/models/route.enum';

@Component({
  selector: 'alza-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  readonly Route = Route;
}
