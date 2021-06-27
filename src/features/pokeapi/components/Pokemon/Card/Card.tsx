import React, { useState } from 'react';
import clsx from 'clsx';
import { capitalize } from 'lodash';
import { faArrowsAltV, faWeightHanging } from '@fortawesome/free-solid-svg-icons';

import { Pokemon } from '../../../types';
import { PokemonAbilityModal } from '../AbilityModal';
import { PokemonStat } from '../Stats';
import { PokemonStatTable } from '../Stats/StatTable';
import { PokemonImage } from '../Image';
import { NamedPokemon } from '../../../../catch';
import Link from 'next/link';
import { PokemonStatBubbles } from '../Stats/StatBubbles';

interface PokemonCardProps
{
  pokemon: NamedPokemon;
  linkToPokemon?: boolean;
  selected?: boolean;
  onClickPokemon?: () => void;
  className?: string;
}

export function PokemonCard({ pokemon, linkToPokemon, selected, onClickPokemon, className }: PokemonCardProps)
{
  const { name, userDefinedName, weight, height, species: { name: speciesName }, stats, types, abilities } = pokemon;

  const [abilityModalOpen, setAbilityModalOpen] = useState(false);

  const displayName = userDefinedName ? `${userDefinedName} (${capitalize(name)})` : capitalize(name);

  return (
    <figure className={clsx('rounded bg-gray-300', className)}>

      {onClickPokemon ? 
        <button type='button' aria-label='catch pokemon' onClick={onClickPokemon} className='w-full rounded-t overflow-hidden'>
          <PokemonImage pokemon={pokemon} animation={selected ? 'animate-bounce' : undefined}/>
        </button>
      : linkToPokemon ? 
        <Link href={`/pokemon/${encodeURIComponent(pokemon.name)}`}>
          <a className='block rounded-t'>
            <PokemonImage pokemon={pokemon} animation={selected ? 'animate-bounce' : undefined} className='rounded-t overflow-hidden'/>
          </a>
        </Link>
      :
        <PokemonImage pokemon={pokemon} animation={selected ? 'animate-bounce' : undefined} className='rounded-t overflow-hidden'/>
      }

      <div className='p-2 flex flex-col gap-2'>

        <figcaption className='px-2 overflow-hidden overflow-ellipsis rounded bg-white'>{displayName}</figcaption>

        <div className='flex flex-row flex-wrap justify-center gap-2 text-base'>
          <PokemonStatBubbles pokemon={pokemon}/>
        </div>

        <div className='bg-white rounded overflow-hidden py-2'>
          <PokemonStatTable stats={stats}/>
        </div>

        <button type='button' onClick={() => setAbilityModalOpen(true)}>View Abilities</button>

        <PokemonAbilityModal isOpen={abilityModalOpen} abilities={abilities} onRequestClose={() => setAbilityModalOpen(false)}/>

      </div>
      
    </figure>
  );
}

PokemonCard.defaultProps = {
  linkToPokemon: undefined,
  selected: undefined,
  onClickPokemon: undefined,
  className: '',
};

export function PokemonCardSkeleton()
{
  return (
    <div className='h-72 bg-gray-300 rounded overflow-hidden flex flex-col animate-pulse'>
      <div className='w-full h-36 bg-white'/>
      
      <div className='flex-grow p-2 flex flex-col gap-2'>

        <div className='w-full h-6 bg-white rounded-full'/>

        <div className='flex flex-row flex-wrap justify-center gap-2'>
          <div className='w-16 h-6 bg-white rounded-full'/>
          <div className='w-16 h-6 bg-white rounded-full'/>
          <div className='w-12 h-6 bg-white rounded-full'/>
        </div>

        <div className='flex-grow w-full h-10 bg-white rounded'/>

      </div>
    </div>
  );
}
