import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { UserModule } from '../core/user/user.module';
import { SharedModule } from '../shared.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    RouterModule,
    SharedModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    UserModule,
  ],
  entryComponents: [HeaderComponent],
})
export class HeaderModule {
  static entry = HeaderComponent;
}
