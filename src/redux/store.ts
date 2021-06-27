import { configureStore } from '@reduxjs/toolkit';
import { debounce } from 'lodash';

import { pokemonReducer, abilityReducer } from '../features/pokeapi';
import { catchReducer, saveCaught }   from '../features/catch';


export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    ability: abilityReducer,
    catch: catchReducer,
  },
});

const DEBOUNCE_WAIT_UNTIL_PERSIST = 200; // in ms

store.subscribe( debounce( () => saveCaught( store.getState().catch.pokemon ) , DEBOUNCE_WAIT_UNTIL_PERSIST) );

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

