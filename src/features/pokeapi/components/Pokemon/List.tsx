import React from 'react';

import { Pokemon } from '../../types';
import { PokemonCard } from './Card';

interface PokemonListProps
{
  pokemon: Pokemon[];
  onCatchPokemon?: (id: number) => void;
}

export function PokemonList({ pokemon, onCatchPokemon }: PokemonListProps)
{
  return (
    <ul className='grid grid-flow-row grid-cols-fill-56 place-items-start gap-2'>
      {pokemon?.map(poke => (
        <li key={poke.id} className='w-full'>
          <PokemonCard pokemon={poke} onCatchPokemon={onCatchPokemon}/>
        </li>
      ))}
    </ul>
  );
}
