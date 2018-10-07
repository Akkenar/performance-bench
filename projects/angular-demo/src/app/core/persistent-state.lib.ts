// It's critical to not use the session/local storage directly to work around some
// compatibility issues such as quota.
import { session } from 'store2';

import { AppState } from './app.state';

export const PERSISTENT_STATE_STORAGE_KEY = '__PERSISTENT_STATE_STORAGE__';

/**
 * Get the persistent state
 *
 * @return {Object} - The persistent state. Empty if there's no state.
 */
export function getPersistentSessionStorage() {
  return session.get(PERSISTENT_STATE_STORAGE_KEY) || {};
}

/**
 * Save the state to the session storage.
 *
 * @param {AppState} state - The state
 */
export function savePersistentSessionStorage(state: AppState) {
  if (!state) {
    return;
  }

  // Get the existing state as we might want to append the new values.
  const existingState = getPersistentSessionStorage();

  // The filtered state will override any present keys in the existing state.
  const mergedState = Object.assign({}, existingState, state);

  session.set(PERSISTENT_STATE_STORAGE_KEY, mergedState);
}
