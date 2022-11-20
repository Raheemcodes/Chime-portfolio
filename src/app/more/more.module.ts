import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnimationDirective } from '../animation.directive';
import { ClickDirective } from '../click.directive';
import { ResponseModule } from '../response/response.module';
import { MoreComponent } from './more.component';

@NgModule({
  declarations: [MoreComponent],
  imports: [
    CommonModule,
    ResponseModule,
    ClickDirective,
    AnimationDirective,
    RouterModule.forChild([{ path: '', component: MoreComponent }]),
  ],
})
export class MoreModule {}
