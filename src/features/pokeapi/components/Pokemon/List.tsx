import { partial } from 'lodash';
import React from 'react';

import { Pokemon } from '../../types';
import { PokemonCard, PokemonCardSkeleton } from './Card';

interface PokemonListProps
{
  loading?: boolean;
  selectedIndex?: number;
  pokemon: Pokemon[];
  onClickPokemon?: (pokeIndex: number) => void;
}

const skeletons = [...Array(5)].map((_, i) =>
  <li key={i} className='w-full'>
    <PokemonCardSkeleton/>
  </li>
);

export function PokemonList({ loading, selectedIndex, pokemon, onClickPokemon }: PokemonListProps)
{
  // const loading=true;
  return (
    <ul className='grid grid-flow-row grid-cols-fill-56 place-items-start gap-4'>
      {loading ? skeletons :
        pokemon?.map((poke, i) => (
          <li key={`${poke.id}_${i}`} className='w-full'>
            <PokemonCard pokemon={poke} selected={selectedIndex === i} onClickPokemon={onClickPokemon && ( () => onClickPokemon(i) )}/>
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
