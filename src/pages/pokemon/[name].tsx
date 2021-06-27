import React from 'react';
import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { useAppDispatch, useAppSelector } from '../../redux';
import { fetchPokemon, selectSingularPokemon } from '../../features/pokeapi/pokeapiSlice';
import { PokemonFullCard, PokemonFullCardSkeleton } from '../../features/pokeapi/components/Pokemon/Card';
import { Hero } from '../../components';

export default function Catch()
{
  const router = useRouter();
  const { name } = router.query;

  const dispatch = useAppDispatch();
  const pokemon = useAppSelector(selectSingularPokemon);

  const status = useAppSelector(state => state.pokeapi.status);

  useEffect(() => {

    if (typeof name !== 'string') return;

    dispatch(fetchPokemon({ idOrName: name }));

  }, [dispatch, name]);

  return (
    <>
      <Head>
        <title>Pokémon Kollect - {name}</title>
      </Head>
      <div className='w-full'>
        <Hero/>

        <main className='px-[15%] py-10 flex flex-col'>
          <Link href='/'>
            <a className='text-white space-x-2 mb-10 drop-shadow place-self-start'>
              <FontAwesomeIcon icon={faArrowLeft} />
              <span>home</span>
            </a>
          </Link>

          { pokemon && status !== 'idle' && status !== 'loading' ? 
            <PokemonFullCard pokemon={pokemon}/>
          :
            <PokemonFullCardSkeleton/>
          }
        </main>
      </div>
    </>
  );
}
