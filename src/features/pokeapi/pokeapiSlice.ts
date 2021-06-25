import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../redux';
import { Endpoint, QueryResponse, QueryResult } from './types';

interface PokeapiState {
  response?: QueryResponse;

  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

const initialState: PokeapiState = {
  response: undefined,
  status: 'idle',
  error: null,
};

export const fetchSearchResults = createAsyncThunk<QueryResponse, Endpoint>('pokeapi/fetchSearchResults', async (endpoint) => {
  const response = await fetch(`https://pokeapi.co/api/v2/${endpoint}`);
  const results: QueryResponse = await response.json();

  return results;
});

export const pokeapiSlice = createSlice({
  name: 'pokeapi',
  initialState,
  reducers: {

  },
  extraReducers: builder => {
    builder
      .addCase(fetchSearchResults.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.response = action.payload;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  }
});

export const selectResponse = (state: RootState) => state.pokeapi.response;
export const selectResults = (state: RootState) => state.pokeapi.response?.results;

export const {  } = pokeapiSlice.actions;
export default pokeapiSlice.reducer;
