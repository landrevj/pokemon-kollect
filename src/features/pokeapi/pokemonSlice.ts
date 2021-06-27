import { createAsyncThunk, createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { random } from 'lodash';

import type { RootState } from '../../redux';
import { fetchArrayToJson } from '../../utils';
import { Ability, QueryResponse, Pokemon } from './types';

interface PokemonState
{
  pokemon: Pokemon | Pokemon[];

  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

const initialState: PokemonState = {
  pokemon: [],
  status: 'idle',
  error: null,
};

// THUNKS

export const fetchPokemon = createAsyncThunk<Pokemon, { idOrName: number | string }>(
  'pokeapi/fetchPokemon',
  async ({ idOrName }) => {

    const countResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
    const pokemon: Pokemon = await countResponse.json();

    return pokemon;
  }
);

export const fetchRandomPokemon = createAsyncThunk<Pokemon[], number>(
  'pokeapi/fetchRandomPokemon',
  async (limit) => {

    // get the max id
    const countResponse = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1');
    const { count }: QueryResponse = await countResponse.json();

    // create `limit` number of queries with random offsets
    const randomSet = new Set<number>();
    while (randomSet.size !== limit) // make sure the random offsets are unique
    {
      randomSet.add(random(1, count));
    }

    const selected = Array.from(randomSet).map(offset => `https://pokeapi.co/api/v2/pokemon?limit=1&offset=${offset}`);
    
    // get the ids from the results of those queries
    const selections = await fetchArrayToJson<QueryResponse>(Array.from(selected));
    const urls = selections.map(select => select.results[0].url);

    // get those pokemon
    const pokemon = await fetchArrayToJson<Pokemon>(urls);

    return pokemon;
});

// SLICE

export const pokemonSlice = createSlice({
  name: 'pokeapi',
  initialState,
  reducers: {

  },
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(fetchPokemon.pending, fetchRandomPokemon.pending),
      state => {
        state.status = 'loading';
      })
      .addMatcher(isAnyOf(fetchPokemon.fulfilled, fetchRandomPokemon.fulfilled), 
      (state, { payload: pokemon }) => {
        state.status = 'succeeded';
        state.pokemon = pokemon;
      })
      .addMatcher(isAnyOf(fetchPokemon.rejected, fetchRandomPokemon.rejected),
      (state, { error: { message: errorMessage } }) => {
        state.status = 'failed';
        state.error = errorMessage || null;
      });
  }
});

// SELECTS

export const selectSingularPokemon = ({ pokemon }: RootState) => {
  if (!Array.isArray(pokemon.pokemon)) return pokemon.pokemon;
  return undefined;
};
export const selectPokemonArray = ({ pokemon }: RootState) => {
  if (Array.isArray(pokemon.pokemon)) return pokemon.pokemon;
  return undefined;
};

// ACTIONS
export const {  } = pokemonSlice.actions;

// REDUCER
export default pokemonSlice.reducer;
