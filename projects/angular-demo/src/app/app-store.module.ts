import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { distinctUntilChanged } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { AppState } from './core/app.state';
import {
  getPersistentSessionStorage,
  savePersistentSessionStorage,
} from './core/persistent-state.lib';

// This has to be an exported function for AoT
// ref https://github.com/ngrx/platform/blob/master/docs/store/api.md#initial-state
export function getInitialState() {
  return { ...getPersistentSessionStorage() };
}

@NgModule({
  exports: [
    StoreModule,
    !environment.production ? StoreDevtoolsModule : [],
    EffectsModule,
  ],
  imports: [
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}, { initialState: getInitialState }),
    // As StoreDevtoolsModule is a development tool only, no need to include it if the
    // app is compiled for production.
    !environment.production
      ? StoreDevtoolsModule.instrument({
          maxAge: 25,
          logOnly: environment.production,
        })
      : [],
  ],
})
export class AppStoreModule {
  constructor(store$: Store<AppState>) {
    // Persist the state to the session storage at each change.
    store$.pipe(distinctUntilChanged()).subscribe(state => {
      savePersistentSessionStorage(state);
    });
  }
}
