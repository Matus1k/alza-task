import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { Hero } from 'src/app/models/hero.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'alza-hero-manage-form',
  templateUrl: './hero-manage-form.component.html',
  styleUrls: ['./hero-manage-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroManageFormComponent implements OnChanges {
  @Input() hero?: Hero;
  @Input() type: 'edit' | 'create' = 'create';
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();
  heroForm: FormGroup;

  readonly dropdownSettings = {
    singleSelection: false,
  };

  readonly heroType = [
    'Mage',
    'Assassin',
    'Fighter',
    'Tank',
    'Marksman',
    'Support',
  ];

  constructor(private fb: FormBuilder) {
    this.heroForm = this.fb.group({
      id: null,
      name: ['', Validators.required],
      title: ['', Validators.required],
      tags: [],
      top: false,
      icon: ['', Validators.required],
      description: ['', Validators.required],
      stats: this.fb.group({
        hp: [null, Validators.required],
        armor: [null, Validators.required],
        movespeed: [null, Validators.required],
        attackrange: [null, Validators.required],
        attackdamage: [null, Validators.required],
        attackspeed: [null, Validators.required],
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
    if (this.heroForm.valid) {
      this.formSubmit.emit(this.heroForm.value);
    } else {
      alert('All form fields are required');
    }
  }
}
