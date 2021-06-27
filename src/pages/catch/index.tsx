import React, { useState } from 'react';
import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { useAppDispatch, useAppSelector } from '../../redux';
import { fetchRandomPokemon, selectPokemon } from '../../features/pokeapi/pokeapiSlice';
import { PokemonList, PokemonNamingModal } from '../../features/pokeapi/components/Pokemon';
import { caughtPokemon, NamedPokemon } from '../../features/catch';
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

  const [namingModalOpen, setNamingModalOpen] = useState(false);

  const [selectedPokemonIndex, setSelectedPokemonIndex] = useState<number | undefined>();
  const selectedPokemon = selectedPokemonIndex !== undefined ? pokemon[selectedPokemonIndex] : undefined;

  function handleCatchPokemon(name: string)
  {
    if (!selectedPokemon) return;

    const namedPokemon: NamedPokemon = { ...selectedPokemon, userDefinedName: name};

    dispatch(caughtPokemon(namedPokemon));
    router.push('/', undefined, { scroll: true });
  };

  return (
    <>
      <Head>
        <title>Pokémon Kollect - Catch</title>
      </Head>
      <div className='w-full'>
        <Hero/>

        <main className='px-[15%] py-10 flex flex-col'>
          <Link href='/'>
            <a className='text-white space-x-2 mb-10 drop-shadow place-self-start'>
              <FontAwesomeIcon icon={faArrowLeft}/>
              <span>back</span>
            </a>
          </Link>

          <CardHeader text='Catchable Pokémon'>
            <div className='flex-grow'/>
            {status === 'succeeded' && selectedPokemon &&

              <button type='button' onClick={() => setNamingModalOpen(true)} className='px-4 py-2 button'>
                Catch that {selectedPokemon.name}!
              </button>
            }
          </CardHeader>

          <Card label='list of catchable pokémon' translucent='bg-opacity-25'>
            {status !== 'failed' ? 
              <PokemonList loading={status === 'loading' || status === 'idle'} pokemon={pokemon} onClickPokemon={setSelectedPokemonIndex} selectedIndex={selectedPokemonIndex}/>
            : (
              <>fail</>
            )}
          </Card>
        </main>
      </div>
      <PokemonNamingModal pokemon={selectedPokemon} onClickCatch={handleCatchPokemon} isOpen={namingModalOpen} onRequestClose={() => setNamingModalOpen(false)}/>
    </>
  );
}
