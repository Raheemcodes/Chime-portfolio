import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoreComponent } from './more.component';
import { FooterModule } from '../footer/footer.module';
import { ResponseModule } from '../response/response.module';
import { ClickDirective } from '../click.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MoreComponent],
  imports: [
    CommonModule,
    ResponseModule,
    FooterModule,
    ClickDirective,
    RouterModule.forChild([{ path: '', component: MoreComponent }]),
  ],
})
export class MoreModule {}
