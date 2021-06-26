import Head from 'next/head';
import Link from 'next/link';
import { selectPokemon } from '../features/catch';

import { PokemonList } from '../features/pokeapi/components/Pokemon';
import { useAppDispatch, useAppSelector } from '../redux';

export default function Home()
{
  const dispatch = useAppDispatch();
  const pokemon = useAppSelector(selectPokemon);

  return (
    <>
      <Head>
        <title>Pokemon Kollect - Home</title>
      </Head>
      <div>
        <Link href='/catch'>
          <a>Catch a Pokemon!</a>
        </Link>

        <PokemonList pokemon={pokemon}/>
      </div>
    </>
  );
}
