import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { ProductsService } from './products.service';

@NgModule({
  imports: [SharedModule],
  providers: [ProductsService],
})
export class ProductsModule {}
