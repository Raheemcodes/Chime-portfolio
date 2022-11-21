import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnimationDirective } from '../animation.directive';
import { CaseStudyListModule } from '../case-study-list/case-study-list.module';
import { ClickDirective } from '../click.directive';
import { FooterModule } from '../footer/footer.module';
import { CaseStudyComponent } from './case-study.component';

@NgModule({
  declarations: [CaseStudyComponent],
  imports: [
    CommonModule,
    CaseStudyListModule,
    FooterModule,
    ClickDirective,
    AnimationDirective,
    RouterModule.forChild([{ path: '', component: CaseStudyComponent }]),
  ],
})
export class CaseStudyModule {}
