import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { routes } from '../app-routing.module';
import { UserModule } from '../core/user/user.module';
import { SharedModule } from '../shared.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    UserModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
