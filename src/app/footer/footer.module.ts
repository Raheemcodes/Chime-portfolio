import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnimationDirective } from '../animation.directive';
import { ClickDirective } from '../click.directive';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, ClickDirective, AnimationDirective],
  exports: [FooterComponent],
})
export class FooterModule {}
