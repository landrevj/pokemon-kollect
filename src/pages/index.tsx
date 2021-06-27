import Head from 'next/head';
import Link from 'next/link';

import { useAppDispatch, useAppSelector } from '../redux';
import { Card, CardHeader, Hero } from '../components';
import { selectPokemon } from '../features/catch';
import { PokemonList } from '../features/pokeapi/components/Pokemon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Home()
{
  const dispatch = useAppDispatch();
  const pokemon = useAppSelector(selectPokemon);

  return (
    <>
      <Head>
        <title>Pokémon Kollect - Home</title>
      </Head>
      <main className='w-full pb-10'>

        <section className='h-screen flex flex-row flex-wrap text-white pb-40'>

          <Hero/>

          <div className='flex-grow w-1/2 min-w-min flex flex-col justify-center place-items-center p-10'>
            <header className='drop-shadow flex flex-col place-items-center'>
              <h1 className='text-7xl text-center text-white italic'>Pokémon Kollect</h1>
              <span>Catch, name, inspect, and release.</span>
            </header>
          </div>

          <nav className='flex-grow w-1/2 min-w-min flex flex-row justify-center place-items-center p-10'>
            <Link href='/catch'>
              <a className='p-4 button'>
                <span>Catch a Pokémon!</span>
                <FontAwesomeIcon icon={faArrowRight}/>
              </a>
            </Link>
          </nav>

        </section>

        <section aria-label='your pokémon' className='w-full px-[15%] flex flex-col -mt-20'>
          <CardHeader text='Your Pokémon' />
          <Card label='list of caught pokémon' translucent='bg-opacity-25' >
            <PokemonList pokemon={pokemon} mode='linkToPokemon'/>
            {pokemon.length === 0 && (
              <div className='w-full p-8 text-white flex flex-row justify-center place-items-center text-xl'>
                Nothing here yet!
              </div>
            )}
          </Card>
        </section>
      </main>
    </>
  );
}
