import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared.module';
import { HomePageComponent } from './home-page.component';

export const ROUTES: Routes = [{ path: '', component: HomePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(ROUTES), SharedModule],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
})
export class HomePageModule {}
