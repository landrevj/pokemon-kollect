import { createAsyncThunk, createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { random } from 'lodash';

import type { RootState } from '../../redux';
import { fetchArrayToJson } from '../../utils';
import { Ability, QueryResponse, Pokemon } from './types';

interface PokeapiState
{
  abilities: Ability[];

  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

const initialState: PokeapiState = {
  abilities: [],
  status: 'idle',
  error: null,
};

// THUNKS

export const fetchAbilitiesByPokemon = createAsyncThunk<Ability[], Pokemon>(
  'pokeapi/fetchAbilitiesByPokemon',
  async pokemon => {

    const pokeAbilityUrls = pokemon.abilities.map(({ ability }) => `https://pokeapi.co/api/v2/ability/${ability.name}`);

    const abilities = await fetchArrayToJson<Ability>(pokeAbilityUrls);

    return abilities;
  }
);

// SLICE

export const pokeapiSlice = createSlice({
  name: 'pokeapi',
  initialState,
  reducers: {

  },
  extraReducers: builder => {
    builder
      .addCase(fetchAbilitiesByPokemon.pending, state => {
          state.status = 'loading';
        })
      .addCase(fetchAbilitiesByPokemon.fulfilled, (state, { payload: abilities }) => {
        state.status = 'succeeded';
        state.abilities = abilities;
      })
      .addCase(fetchAbilitiesByPokemon.rejected, (state, { error: { message: errorMessage } }) => {
        state.status = 'failed';
        state.error = errorMessage || null;
      });
  }
});

// SELECTS

export const selectAbilities = ({ ability }: RootState) => {
  return ability.abilities;
};

// ACTIONS
export const { } = pokeapiSlice.actions;

// REDUCER
export default pokeapiSlice.reducer;
