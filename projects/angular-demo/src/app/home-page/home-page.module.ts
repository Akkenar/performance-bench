import {
  NgModule,
  NgModuleFactoryLoader,
  SystemJsNgModuleLoader,
} from '@angular/core';
import { MatCardModule, MatIconModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { DynamicImageModule } from '../dynamic-image/dynamic-image.module';
import { SharedModule } from '../shared.module';
import { HomePageComponent } from './home-page.component';

export const ROUTES: Routes = [{ path: '', component: HomePageComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    SharedModule,
    MatCardModule,
    MatIconModule,
    DynamicImageModule,
  ],
  declarations: [HomePageComponent],
  providers: [
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
  ],
  exports: [HomePageComponent],
})
export class HomePageModule {}
