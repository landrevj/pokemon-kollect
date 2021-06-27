import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from '../features/counter';
import { pokemonReducer, abilityReducer } from '../features/pokeapi';
import { catchReducer }   from '../features/catch';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemon: pokemonReducer,
    ability: abilityReducer,
    catch: catchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
