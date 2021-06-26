import React from 'react';
import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { useAppDispatch, useAppSelector } from '../../redux';
import { fetchRandomPokemon, selectPokemon } from '../../features/pokeapi/pokeapiSlice';
import { PokemonList } from '../../features/pokeapi/components/Pokemon';
import { Pokemon } from '../../features/pokeapi';
import { caughtPokemon } from '../../features/catch';
import { Card, CardHeader, Hero } from '../../components';

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
    router.push('/', {}, { scroll: true });
  };

  return (
    <>
      <Head>
        <title>Pokémon Kollect - Catch</title>
      </Head>
      <div className='w-full'>
        <Hero/>

        <main className='px-[15%] py-10 flex flex-col place-items-start'>
          <Link href='/'>
            <a className='text-white space-x-2 mb-10 drop-shadow'>
              <FontAwesomeIcon icon={faArrowLeft}/>
              <span>back</span>
            </a>
          </Link>

          <CardHeader text='Catchable Pokémon'/>
          <Card label='list of catchable pokémon' translucent='bg-opacity-25'>
            {status !== 'failed' ? 
              <PokemonList loading={status === 'loading' || status === 'idle'} pokemon={pokemon} onCatchPokemon={handleCatchPokemon}/>
            : (
              <>fail</>
            )}
          </Card>
        </main>
      </div>
    </>
  );
}
