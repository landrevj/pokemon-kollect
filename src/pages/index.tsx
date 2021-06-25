import Head from 'next/head';

import { Counter } from '../features/counter';
import { PokemonList } from '../features/pokeapi/components/Pokemon';

export default function Home()
{
  return (
    <>
      <Head>
        <title>Pokemon Kollect</title>
      </Head>
      <div>
        <Counter/>
        <PokemonList/>
      </div>
    </>
  );
}
