import React from 'react';
import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

import { useAppDispatch, useAppSelector } from '../../redux';
import { fetchRandomPokemon, selectPokemon } from '../../features/pokeapi/pokeapiSlice';
import { PokemonList } from '../../features/pokeapi/components/Pokemon';
import { Pokemon } from '../../features/pokeapi';
import { caughtPokemon } from '../../features/catch';

export default function Catch()
{
  const router = useRouter();

  const dispatch = useAppDispatch();
  const pokemon = useAppSelector(selectPokemon);

  const status = useAppSelector(state => state.pokeapi.status);

  useEffect(() => {

    dispatch(fetchRandomPokemon(10));

  }, [dispatch]);

  const handleCatchPokemon = (poke: Pokemon) => {
    dispatch(caughtPokemon(poke));
    router.push('/', undefined, { scroll: true });
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
