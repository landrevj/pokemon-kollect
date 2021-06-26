import Head from 'next/head';
import Link from 'next/link';

import { PokemonList } from '../features/pokeapi/components/Pokemon';

export default function Home()
{
  return (
    <>
      <Head>
        <title>Pokemon Kollect</title>
      </Head>
      <div>
        <Link href='/catch'>
          <a>Catch a Pokemon!</a>
        </Link>
      </div>
    </>
  );
}
