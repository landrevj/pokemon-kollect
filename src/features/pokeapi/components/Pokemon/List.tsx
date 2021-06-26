import React from 'react';

import { Pokemon } from '../../types';
import { PokemonCard, PokemonCardSkeleton } from './Card';

interface PokemonListProps
{
  loading?: boolean;
  pokemon: Pokemon[];
  onCatchPokemon?: (poke: Pokemon) => void;
}

const skeletons = [...Array(5)].map((_, i) =>
  <li key={i} className='w-full'>
    <PokemonCardSkeleton/>
  </li>
);

export function PokemonList({ loading, pokemon, onCatchPokemon }: PokemonListProps)
{
  // const loading=true;
  return (
    <ul className='grid grid-flow-row grid-cols-fill-56 place-items-start gap-4'>
      {loading ? skeletons :
        pokemon?.map((poke, i) => (
          <li key={`${poke.id}_${i}`} className='w-full'>
            <PokemonCard pokemon={poke} onCatchPokemon={onCatchPokemon}/>
          </li>
        )
      )}
    </ul>
  );
}

PokemonList.defaultProps = {
  loading: undefined,
  onCatchPokemon: undefined,
};
