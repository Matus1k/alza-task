import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListPage } from './hero-list.page';
import { RouterModule } from '@angular/router';
import { TagModule } from '../../components/tag/tag.module';
import { LoadingDotsModule } from '../../components/loading-dots/loading-dots.module';

@NgModule({
  declarations: [HeroListPage],
  imports: [
    CommonModule,
    TagModule,
    LoadingDotsModule,
    RouterModule.forChild([{ path: '', component: HeroListPage }]),
  ],
})
export class HeroListModule {}
