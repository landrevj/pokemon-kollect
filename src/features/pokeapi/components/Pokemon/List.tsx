import { partial } from 'lodash';
import React from 'react';

import { Pokemon } from '../../types';
import { PokemonCard, PokemonCardSkeleton } from './Card';

interface PokemonListProps
{
  loading?: boolean;
  selectedIndex?: number;
  pokemon: Pokemon[];

  mode?: 'linkToPokemon' | 'clickable';
  onClickPokemon?: (pokeIndex: number) => void;
}

const skeletons = [...Array(5)].map((_, i) =>
  <li key={i} className='w-full'>
    <PokemonCardSkeleton/>
  </li>
);

export function PokemonList({ loading, selectedIndex, pokemon, mode, onClickPokemon }: PokemonListProps)
{
  return (
    <ul className='grid grid-flow-row grid-cols-fill-56 place-items-start gap-4'>
      {loading ? skeletons :
        pokemon?.map((poke, i) => {

          const clickHandler = mode === 'clickable' && onClickPokemon ? () => onClickPokemon(i) : undefined;

          return (
            <li key={`${poke.id}_${i}`} className='w-full'>
              <PokemonCard pokemon={poke} linkToPokemon={mode === 'linkToPokemon'} selected={selectedIndex === i} onClickPokemon={clickHandler}/>
            </li>
          )
        }
      )}
    </ul>
  );
}

PokemonList.defaultProps = {
  loading: undefined,
  mode: undefined,
  onCatchPokemon: undefined,
};
