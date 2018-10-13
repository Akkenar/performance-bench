import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../../shared.module';
import { TokenInterceptorProvider } from './token.interceptor';
import { USER_FEATURE } from './user.const';
import { UserEffects } from './user.effects';
import { userReducer } from './user.reducer';
import { UserService } from './user.service';

@NgModule({
  providers: [UserService, TokenInterceptorProvider],
  imports: [
    StoreModule.forFeature(USER_FEATURE, userReducer),
    EffectsModule.forFeature([UserEffects]),
    SharedModule,
  ],
})
export class UserModule {}
