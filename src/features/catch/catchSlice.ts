import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../redux';
import { Pokemon } from '../pokeapi/types';

export type NamedPokemon = Pokemon & { userDefinedName?: string };

interface CatchState {
  pokemon: NamedPokemon[];
};

// PERSISTING TO LOCALSTORAGE

// https://medium.com/@jrcreencia/persisting-redux-state-to-local-storage-f81eb0b90e7e
const loadCaught = () => {
  try
  {
    const caught = localStorage.getItem('caught');
    if (caught === null)
    {
      return undefined;
    }
    return JSON.parse(caught) as NamedPokemon[];
  }
  catch (err)
  {
    return undefined;
  }
};

export const saveCaught = (caught: NamedPokemon[]) => {
  try
  {
    localStorage.setItem('caught', JSON.stringify(caught));
  }
  catch
  {
    console.warn('failed to persist caught pokemon to localstorage');
  }
};

// SLICE

const initialState: CatchState = {
  pokemon: loadCaught() || [],
};

export const catchSlice = createSlice({
  name: 'catch',
  initialState,
  reducers: {
    caughtPokemon: (state, action: PayloadAction<NamedPokemon>) => {
      state.pokemon.push(action.payload);
    },
    releasedPokemonByIndex: (state, action: PayloadAction<number>) => {
      state.pokemon.splice(action.payload, 1);
    }
  }
});

// SELECTS

export const selectPokemon = (state: RootState) => state.catch.pokemon;

// ACTIONS
export const { caughtPokemon, releasedPokemonByIndex } = catchSlice.actions;

// REDUCER
export default catchSlice.reducer;
