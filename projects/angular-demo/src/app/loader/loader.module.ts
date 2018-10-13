import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material';
import { LoaderComponent } from './loader.component';
import { PendingInterceptorServiceInterceptor } from './pending-interceptor.service';

@NgModule({
  declarations: [LoaderComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [LoaderComponent],
  providers: [PendingInterceptorServiceInterceptor],
})
export class LoaderModule {}
