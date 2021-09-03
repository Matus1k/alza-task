import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailPage } from './hero-detail.page';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeroDetailPage],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: HeroDetailPage }]),
  ],
})
export class HeroDetailModule {}
