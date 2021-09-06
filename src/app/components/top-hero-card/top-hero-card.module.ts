import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHeroCardComponent } from './top-hero-card.component';
import { RouterModule } from '@angular/router';
import { TagModule } from '../tag/tag.module';

@NgModule({
  declarations: [TopHeroCardComponent],
  imports: [CommonModule, RouterModule, TagModule],
  exports: [TopHeroCardComponent],
})
export class TopHeroCardModule {}
