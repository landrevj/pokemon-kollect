import React from 'react';
import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { useAppDispatch, useAppSelector } from '../../redux';
import { fetchRandomPokemon, selectPokemon } from '../../features/pokeapi/pokeapiSlice';
import { PokemonList } from '../../features/pokeapi/components/Pokemon';

export default function Catch()
{
  const dispatch = useAppDispatch();
  const pokemon = useAppSelector(selectPokemon);

  const status = useAppSelector(state => state.pokeapi.status);

  useEffect(() => {

    if (status === 'idle') dispatch(fetchRandomPokemon(10));

  }, [status, dispatch]);

  const handleCatchPokemon = (id: number) => {
    console.log(id);
  };

  return (
    <>
      <Head>
        <title>Pokemon Kollect - Catch</title>
      </Head>
      <div>
        <Link href='/'>
          <a>back</a>
        </Link>
        <PokemonList pokemon={pokemon} onCatchPokemon={handleCatchPokemon}/>
      </div>
    </>
  );
}
