import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from '../features/counter';
import { pokeapiReducer } from '../features/pokeapi';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokeapi: pokeapiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
