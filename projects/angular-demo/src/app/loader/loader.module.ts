import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material';
import { SharedModule } from '../shared.module';
import { LoaderComponent } from './loader.component';

@NgModule({
  declarations: [LoaderComponent],
  imports: [SharedModule, MatProgressSpinnerModule],
  exports: [LoaderComponent],
})
export class LoaderModule {}
