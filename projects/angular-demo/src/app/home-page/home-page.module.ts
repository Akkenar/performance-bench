import {
  NgModule,
  NgModuleFactoryLoader,
  SystemJsNgModuleLoader,
} from '@angular/core';
import { MatCardModule, MatIconModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { AsyncComponentsService } from '../core/async-components.service';
import { ProductsModule } from '../core/products/products.module';
import { DynamicImageModule } from '../dynamic-image/dynamic-image.module';
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
    DynamicImageModule,
  ],
  declarations: [HomePageComponent],
  providers: [
    AsyncComponentsService,
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
  ],
  exports: [HomePageComponent],
})
export class HomePageModule {}
