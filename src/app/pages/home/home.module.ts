import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { RouterModule } from '@angular/router';
import { TopHeroCardModule } from '../../components/top-hero-card/top-hero-card.module';

@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    TopHeroCardModule,
    RouterModule.forChild([{ path: '', component: HomePage }]),
  ],
})
export class HomeModule {}
