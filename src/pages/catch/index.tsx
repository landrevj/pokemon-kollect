import React, { useState } from 'react';
import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { useAppDispatch, useAppSelector } from '../../redux';
import { fetchRandomPokemon, selectPokemonArray } from '../../features/pokeapi/pokemonSlice';
import { PokemonAbilityModal, PokemonList, PokemonNamingModal } from '../../features/pokeapi/components/Pokemon';
import { caughtPokemon, NamedPokemon } from '../../features/catch';
import { Card, CardHeader, Hero } from '../../components';

export default function Catch()
{
  const router = useRouter();

  const dispatch = useAppDispatch();
  const pokemon = useAppSelector(selectPokemonArray);

  const status = useAppSelector(state => state.pokemon.status);

  useEffect(() => {

    dispatch(fetchRandomPokemon(10));

  }, [dispatch]);

  const [namingModalOpen, setNamingModalOpen] = useState(false);

  const [selectedPokemonIndex, setSelectedPokemonIndex] = useState<number | undefined>();
  const selectedPokemon = selectedPokemonIndex !== undefined && pokemon ? pokemon[selectedPokemonIndex] : undefined;

  const handleCatchPokemon = (name: string) => {
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
              <span>home</span>
            </a>
          </Link>

          <CardHeader text='Catchable Pokémon'>
            <div className='flex-grow'/>
            {status === 'succeeded' &&

              <button type='button' onClick={() => setNamingModalOpen(true)} className='px-4 py-2 button' disabled={!selectedPokemon}>
                {selectedPokemon ? `Catch that ${selectedPokemon.name}!` : 'Select a pokemon to catch.'}
              </button>
            }
          </CardHeader>

          <Card label='list of catchable pokémon' translucent='bg-opacity-25'>
            {status !== 'failed' ? 
              <PokemonList loading={status === 'loading' || status === 'idle'} imageClickMode='callback' pokemon={Array.isArray(pokemon) ? pokemon : []} onClickPokemon={setSelectedPokemonIndex} selectedIndex={selectedPokemonIndex}/>
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
