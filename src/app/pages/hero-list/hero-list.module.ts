import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListPage } from './hero-list.page';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeroListPage],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: HeroListPage }]),
  ],
})
export class HeroListModule {}
