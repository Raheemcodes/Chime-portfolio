import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheffingComponent } from '../components/cheffing/cheffing.component';
import { ExperienceComponent } from './experience.component';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [ExperienceComponent, CheffingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ExperienceComponent }]),
    FooterModule,
  ],
})
export class ExperienceModule {}
