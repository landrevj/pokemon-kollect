import React, { useState } from 'react';
import clsx from 'clsx';
import { capitalize } from 'lodash';

import { Modal } from '../../../../../components';
import { PokemonAbilityModal } from '../AbilityModal';
import { PokemonStatTable, PokemonStatTableSkeleton } from '../Stats/Table';
import { PokemonImage } from '../Image';
import { NamedPokemon } from '../../../../catch';
import Link from 'next/link';
import { PokemonStatBubbles, PokemonStatBubblesSkeleton } from '../Stats/Bubbles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

interface PokemonCardProps
{
  id: string;
  pokemon: NamedPokemon;
  linkToPokemon?: boolean;
  selected?: boolean;
  onClickPokemon?: () => void;
  onReleasePokemon?: () => void;
  className?: string;
}

export function PokemonCard({ id, pokemon, linkToPokemon, selected, onClickPokemon, onReleasePokemon, className }: PokemonCardProps)
{
  const { name, userDefinedName, stats } = pokemon;

  const [abilityModalOpen, setAbilityModalOpen] = useState(false);
  const [releaseModalOpen, setReleaseModalOpen] = useState(false);

  const displayName = userDefinedName ? `${userDefinedName} (${capitalize(name)})` : capitalize(name);

  return (
    <article className={clsx('rounded bg-gray-300', className)} aria-label={`${name} card`}>

      {onClickPokemon ?

        <button type='button' aria-label='select pokemon' onClick={onClickPokemon} className='w-full rounded-t overflow-hidden'>
          <PokemonImage pokemon={pokemon} animation={selected ? 'animate-bounce' : undefined}/>
        </button>
      
      : linkToPokemon ?

        <Link href={`/pokemon/${encodeURIComponent(pokemon.name)}`}>
          <a className='block rounded-t' aria-label={`link to ${pokemon.name}'s page`}>
            <PokemonImage pokemon={pokemon} animation={selected ? 'animate-bounce' : undefined} className='rounded-t overflow-hidden'/>
          </a>
        </Link>

      :

        <PokemonImage pokemon={pokemon} animation={selected ? 'animate-bounce' : undefined} className='rounded-t overflow-hidden'/>
      
      }

      <div className='p-2 flex flex-col gap-2'>

        <h1 className='px-2 overflow-hidden overflow-ellipsis rounded bg-white'>{displayName}</h1>

        <div className='flex flex-row flex-wrap justify-center gap-2 text-base'>
          <PokemonStatBubbles pokemon={pokemon}/>
        </div>

        <div className='bg-white rounded overflow-hidden py-2'>
          <PokemonStatTable stats={stats}/>
        </div>

        <button type='button' onClick={() => setAbilityModalOpen(true)}>View Abilities</button>
        { onReleasePokemon && <button type='button' onClick={() => setReleaseModalOpen(true)} className='text-red-600'>Release</button>}

        <PokemonAbilityModal id={`${id}${pokemon.name}`} isOpen={abilityModalOpen} pokemon={pokemon} onRequestClose={() => setAbilityModalOpen(false)}/>
        <Modal id={`${id}${pokemon.name}ReleaseModal`} isOpen={releaseModalOpen} label='release pokemon confirmation modal' onRequestClose={() => setReleaseModalOpen(false)}>
          <header className='space-x-2'>
            <FontAwesomeIcon icon={faExclamationTriangle}/>
            <h1 className='inline'>Are you sure you want to release {userDefinedName || name}?</h1>
          </header>

          <div className='flex flex-row gap-4 justify-center mt-4'>
            <button type='button' onClick={() => setReleaseModalOpen(false)} className='text-blue-600'>Go back!</button>
            <button type='button' onClick={onReleasePokemon} className='text-red-600'>Release</button>
          </div>
        </Modal>

      </div>
      
    </article>
  );
}

PokemonCard.defaultProps = {
  linkToPokemon: undefined,
  selected: undefined,
  onClickPokemon: undefined,
  onReleasePokemon: undefined,
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
          <PokemonStatBubblesSkeleton/>
        </div>

        <PokemonStatTableSkeleton/>
      </div>
    </div>
  );
}
