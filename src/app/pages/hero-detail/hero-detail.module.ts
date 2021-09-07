import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailPage } from './hero-detail.page';
import { RouterModule } from '@angular/router';
import { TagModule } from '../../components/tag/tag.module';

@NgModule({
  declarations: [HeroDetailPage],
  imports: [
    CommonModule,
    TagModule,
    RouterModule.forChild([{ path: '', component: HeroDetailPage }]),
  ],
})
export class HeroDetailModule {}
