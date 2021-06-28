import React from 'react';

import { Pokemon } from '../../types';
import { PokemonCard, PokemonCardSkeleton } from './Card';

interface PokemonListProps
{
  loading?: boolean;
  selectedIndex?: number;
  pokemon: Pokemon[];

  imageClickMode?: 'linkToPokemon' | 'callback';
  onClickPokemon?: (index: number) => void;
  onReleasePokemon?: (index: number) => void;
}

const skeletons = (
  <ul className='grid grid-flow-row grid-cols-fill-56 place-items-start gap-4'>
    {[...Array(5)].map((_, i) =>(
      <li key={i} className='w-full'>
        <PokemonCardSkeleton/>
      </li>
    ))}
  </ul>
);

export function PokemonList({ loading, selectedIndex, pokemon, imageClickMode, onClickPokemon, onReleasePokemon }: PokemonListProps)
{
  return (loading ? skeletons :

    <ul className='grid grid-flow-row grid-cols-fill-56 place-items-start gap-4' aria-label='pokemon list'>
      {pokemon?.map((poke, i) => {
        const handleClick = imageClickMode === 'callback' && onClickPokemon ? () => onClickPokemon(i) : undefined;
        const handleRelease = onReleasePokemon ? () => onReleasePokemon(i) : undefined;

        return (
          <li key={`${poke.id}_${i}`} className='w-full'>
            <PokemonCard id={i.toString()} pokemon={poke} linkToPokemon={imageClickMode === 'linkToPokemon'} selected={selectedIndex === i} onClickPokemon={handleClick} onReleasePokemon={handleRelease}/>
          </li>
        );
      })}
    </ul>

  );
}

PokemonList.defaultProps = {
  loading: undefined,
  selectedIndex: undefined,
  imageClickmode: undefined,
  onClickPokemon: undefined,
  onReleasePokemon: undefined,
};
