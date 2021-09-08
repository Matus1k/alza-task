import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateHeroPage } from './create-hero.page';
import { HeroManageFormModule } from '../../components/hero-manage-form/hero-manage-form.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CreateHeroPage],
  imports: [
    CommonModule,
    HeroManageFormModule,
    RouterModule.forChild([{ path: '', component: CreateHeroPage }]),
  ],
})
export class CreateHeroModule {}
