import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { Hero } from 'src/app/models/hero.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'alza-hero-manage-form',
  templateUrl: './hero-manage-form.component.html',
  styleUrls: ['./hero-manage-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroManageFormComponent implements OnChanges {
  @Input() hero: Hero | undefined;
  @Input() type: 'edit' | 'create' = 'create';
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();
  heroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.heroForm = this.fb.group({
      id: null,
      name: '',
      title: '',
      tags: null,
      top: false,
      icon: '',
      description: '',
      stats: this.fb.group({
        hp: null,
        armor: null,
        movespeed: null,
        attackrange: null,
        attackdamage: null,
        attackspeed: null,
      }),
    });
  }

  ngOnChanges(): void {
    if (this.hero) {
      this.heroForm.patchValue({
        id: this.hero.id,
        name: this.hero.name,
        title: this.hero.title,
        tags: this.hero.tags,
        top: this.hero.top,
        icon: this.hero.icon,
        description: this.hero.description,
        stats: {
          hp: this.hero.stats.hp,
          armor: this.hero.stats.armor,
          movespeed: this.hero.stats.movespeed,
          attackrange: this.hero.stats.attackrange,
          attackdamage: this.hero.stats.attackdamage,
          attackspeed: this.hero.stats.attackspeed,
        },
      });
    }
  }

  onFormSubmit(): void {
    this.formSubmit.emit(this.heroForm.value);
  }
}
