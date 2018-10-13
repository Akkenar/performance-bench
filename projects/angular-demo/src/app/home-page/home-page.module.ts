import { NgModule } from '@angular/core';
import { MatCardModule, MatIconModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { ProductsModule } from '../core/products/products.module';
import { SharedModule } from '../shared.module';
import { HomePageComponent } from './home-page.component';

export const ROUTES: Routes = [{ path: '', component: HomePageComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    SharedModule,
    ProductsModule,
    MatCardModule,
    MatIconModule,
  ],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
})
export class HomePageModule {}
