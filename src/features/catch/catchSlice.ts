import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../redux';
import { Pokemon } from '../pokeapi/types';

interface CatchState {
  pokemon: Pokemon[];
};

const initialState: CatchState = {
  pokemon: [],
};

export const catchSlice = createSlice({
  name: 'catch',
  initialState,
  reducers: {
    caughtPokemon: (state, action: PayloadAction<Pokemon>) => {
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
