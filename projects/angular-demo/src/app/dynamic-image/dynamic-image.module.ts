import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicImageComponent } from './dynamic-image.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DynamicImageComponent],
  exports: [DynamicImageComponent],
})
export class DynamicImageModule {}
