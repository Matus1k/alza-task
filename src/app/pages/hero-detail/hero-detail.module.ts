import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailPage } from './hero-detail.page';
import { RouterModule } from '@angular/router';
import { TagModule } from '../../components/tag/tag.module';
import { HeroManageFormModule } from '../../components/hero-manage-form/hero-manage-form.module';

@NgModule({
  declarations: [HeroDetailPage],
  imports: [
    CommonModule,
    TagModule,
    HeroManageFormModule,
    RouterModule.forChild([{ path: '', component: HeroDetailPage }]),
  ],
})
export class HeroDetailModule {}
