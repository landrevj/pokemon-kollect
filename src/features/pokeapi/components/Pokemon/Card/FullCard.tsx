import { capitalize } from 'lodash';
import React from 'react';

import { Card } from '../../../../../components/Card';
import { Pokemon } from '../../../types';
import { PokemonImage } from '../Image';
import { PokemonStatTable, PokemonStatBubbles, PokemonStatBubblesSkeleton } from '../Stats';
import { PokemonAbilityList } from '../AbilityList';

interface PokemonFullCardProps
{
  pokemon: Pokemon;
}

export function PokemonFullCard({ pokemon }: PokemonFullCardProps)
{
  
  return (
    <Card label='pokemon info card' className='grid grid-flow-row grid-cols-1 lg:grid-cols-3 gap-8'>
      <section className='flex flex-col gap-4'>
        <PokemonImage pokemon={pokemon} className='rounded overflow-hidden' />
        <PokemonStatTable stats={pokemon.stats} />
      </section>

      <section className='col-span-2 flex flex-col gap-4'>
        <h1 className='text-5xl'>{capitalize(pokemon.name)}</h1>
        
        <hr />
        
        <div className='flex flex-row flex-wrap gap-2 bg-gray-200 rounded p-2'>
          <PokemonStatBubbles pokemon={pokemon}/>
        </div>

        <h2 className='mt-4'>Abilities</h2>
        <PokemonAbilityList pokemon={pokemon} />

      </section>

      
    </Card>
  );
}

export function PokemonFullCardSkeleton()
{
  return (
    <Card label='pokemon info card' className='grid grid-flow-row grid-cols-1 lg:grid-cols-3 gap-4'>
      <div className='w-full h-64 bg-gray-300 animate-pulse rounded'/>

      <div className='col-span-2 flex flex-col gap-4'>
        <h1 className='text-5xl h-10 w-64 bg-gray-300 rounded-full animate-pulse'></h1>
        <hr />
        <div className='flex flex-row flex-wrap gap-2 bg-gray-200 rounded p-2 animate-pulse'>
          <PokemonStatBubblesSkeleton />
        </div>

      </div>

    </Card>
  );
}
