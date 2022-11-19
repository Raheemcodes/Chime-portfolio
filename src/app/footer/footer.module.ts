import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClickDirective } from '../click.directive';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, ClickDirective],
  exports: [FooterComponent],
})
export class FooterModule {}
