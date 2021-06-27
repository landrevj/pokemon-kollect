import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../redux';
import { Pokemon } from '../pokeapi/types';

export type NamedPokemon = Pokemon & { userDefinedName?: string };

interface CatchState {
  pokemon: NamedPokemon[];
};

const initialState: CatchState = {
  pokemon: [],
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

export const selectPokemon = (state: RootState) => state.catch.pokemon;

export const { caughtPokemon, releasedPokemonByIndex } = catchSlice.actions;
export default catchSlice.reducer;
