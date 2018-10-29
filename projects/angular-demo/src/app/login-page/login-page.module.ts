import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { IsNotAuthenticatedGuard } from '../core/user/is-not-authenticated.guard';
import { UserModule } from '../core/user/user.module';
import { SharedModule } from '../shared.module';

import { LoginPageComponent } from './login-page.component';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: LoginPageComponent,
    canActivate: [IsNotAuthenticatedGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    UserModule,
  ],
  declarations: [LoginPageComponent],
})
export class LoginPageModule {}
