import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroManageFormComponent } from './hero-manage-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeroManageFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [HeroManageFormComponent],
})
export class HeroManageFormModule {}
