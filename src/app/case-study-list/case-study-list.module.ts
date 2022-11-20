import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnimationDirective } from '../animation.directive';
import { CaseStudyListComponent } from './case-study-list.component';

@NgModule({
  declarations: [CaseStudyListComponent],
  imports: [CommonModule, AnimationDirective],
  exports: [CaseStudyListComponent],
})
export class CaseStudyListModule {}
