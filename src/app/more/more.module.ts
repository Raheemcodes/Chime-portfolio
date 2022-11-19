import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClickDirective } from '../click.directive';
import { ResponseModule } from '../response/response.module';
import { MoreComponent } from './more.component';

@NgModule({
  declarations: [MoreComponent],
  imports: [
    CommonModule,
    ResponseModule,
    ClickDirective,
    RouterModule.forChild([{ path: '', component: MoreComponent }]),
  ],
})
export class MoreModule {}
