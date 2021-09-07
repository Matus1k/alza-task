import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListPage } from './hero-list.page';
import { RouterModule } from '@angular/router';
import { TagModule } from '../../components/tag/tag.module';

@NgModule({
  declarations: [HeroListPage],
  imports: [
    CommonModule,
    TagModule,
    RouterModule.forChild([{ path: '', component: HeroListPage }]),
  ],
})
export class HeroListModule {}
