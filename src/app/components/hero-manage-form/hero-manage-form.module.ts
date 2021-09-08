import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroManageFormComponent } from './hero-manage-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [HeroManageFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  exports: [HeroManageFormComponent],
})
export class HeroManageFormModule {}
