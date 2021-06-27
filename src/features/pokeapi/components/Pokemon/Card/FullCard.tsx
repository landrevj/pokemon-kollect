import { capitalize } from 'lodash';
import React from 'react';

import { Card } from '../../../../../components/Card';
import { Pokemon } from '../../../types';
import { PokemonImage } from '../Image';
import { PokemonStatBubbles } from '../Stats/StatBubbles';
import { PokemonStatTable } from '../Stats/StatTable';

interface PokemonFullCardProps
{
  pokemon: Pokemon;
}

export function PokemonFullCard({ pokemon }: PokemonFullCardProps)
{
  return (
    <Card label='pokemon info card' className='grid grid-flow-row grid-cols-1 lg:grid-cols-3 gap-4'>
      <PokemonImage pokemon={pokemon} className='rounded overflow-hidden' />

      <div className='col-span-2 flex flex-col gap-4'>
        <h1 className='text-5xl'>{capitalize(pokemon.name)}</h1>
        <hr />
        <div className='flex flex-row flex-wrap gap-2 bg-gray-200 rounded p-2'>
          <PokemonStatBubbles pokemon={pokemon}/>
        </div>

      </div>

      <PokemonStatTable stats={pokemon.stats}/>
      
    </Card>
  );
}

export function PokemonFullCardSkeleton()
{
  return (
    <></>
  );
}
