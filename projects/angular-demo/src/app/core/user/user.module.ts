import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TokenInterceptor } from '../auth/token.interceptor';
import { UserEffects } from './user.effects';
import { userReducer } from './user.reducer';
import { UserService } from './user.service';

export const USER_FEATURE = 'user';

@NgModule({
  providers: [UserService],
  imports: [
    StoreModule.forFeature(USER_FEATURE, userReducer),
    EffectsModule.forFeature([UserEffects]),
  ],
})
export class UserModule {}
