import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../redux';
import { fetchSearchResults, selectResponse, selectResults } from '../../pokeapiSlice';


export function PokemonList()
{
  const dispatch = useAppDispatch();
  const response = useAppSelector(selectResponse);
  const pokemon = response?.results;

  console.log('pokemon', pokemon);

  const resultStatus = useAppSelector(state => state.pokeapi.status);

  useEffect(() => {

    if (resultStatus === 'idle') dispatch(fetchSearchResults('pokemon'));

  }, [resultStatus, dispatch]);

  return (
    <ul>
      {resultStatus}
      {pokemon?.map((poke, i) => (
        <li key={i}>{poke.name}</li>
      ))}
    </ul>
  );
}
