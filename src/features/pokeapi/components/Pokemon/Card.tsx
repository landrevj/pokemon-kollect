import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { capitalize, sample } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAltV, faWeight, faWeightHanging } from '@fortawesome/free-solid-svg-icons';


import beachshore from '../../../../../public/bgs/beachshore.png';
import city from '../../../../../public/bgs/city.png';
import dampcave from '../../../../../public/bgs/dampcave.png';
import deepsea from '../../../../../public/bgs/deepsea.png';
import desert from '../../../../../public/bgs/desert.png';
import earthycave from '../../../../../public/bgs/earthycave.png';
import forest from '../../../../../public/bgs/forest.png';

import { Pokemon, POKEMON_SPRITE_HEIGHT, POKEMON_SPRITE_WIDTH } from '../../types';
import { PokemonStat } from './Stat';
import { PokemonStatTable } from './StatTable';

interface PokemonCardProps
{
  pokemon: Pokemon;
  onCatchPokemon?: (poke: Pokemon) => void;
  className?: string;
}

const bgs = [ beachshore, city, dampcave, deepsea, desert, earthycave, forest ];
const t = sample(bgs);

export function PokemonCard({ pokemon, onCatchPokemon, className }: PokemonCardProps)
{
  const { name, weight, height, sprites, species: { name: speciesName }, stats, types } = pokemon;

  const catchPokemonButton = onCatchPokemon && (
    <button
      role='button'
      aria-label='catch pokemon'
      className={clsx(
        'absolute w-full h-full top-0 flex flex-col justify-center place-items-center',
        'opacity-0 hover:opacity-100 focus:opacity-100',
        'bg-black bg-opacity-30 hover:backdrop-blur focus:backdrop-blur text-white'
      )}
      onClick={() => onCatchPokemon(pokemon)}
    >
      Click to catch!
    </button>
  );

  return (
    <figure className={clsx('rounded overflow-hidden bg-gray-300', className)}>
      <div className='relative'>
        <Image
          priority
          layout='responsive'
          src={sample(bgs) || forest} 
          alt={`Background sprite`}
          />
        <div className='absolute top-0 w-full h-full flex flex-row justify-center place-items-center'>
          <Image
            priority
            src={sprites.front_default}
            alt={`Sprite image of ${name}`}
            width={POKEMON_SPRITE_WIDTH}
            height={POKEMON_SPRITE_HEIGHT}
          />
        </div>

        {catchPokemonButton}       

      </div>

      <div className='p-2 flex flex-col gap-2'>

        <figcaption className='px-2 overflow-hidden overflow-ellipsis whitespace-nowrap rounded bg-gradient-to-tr from-white to-gray-200'>{capitalize(name)}</figcaption>

        <div className='flex flex-row flex-wrap justify-center gap-2 text-base'>
          <PokemonStat icon={faWeightHanging} label='weight in kilograms' value={`${(weight / 10).toLocaleString()} kg`}/>
          <PokemonStat icon={faArrowsAltV}    label='height in meters'    value={`${(height / 10).toLocaleString()} m`}/>

          {types.map(({ type: { name } }, i) => 
            <PokemonStat label={`${name} type`} value={name} key={i}/>
          )}
        </div>

        <div className='bg-white rounded overflow-hidden py-2'>
          <PokemonStatTable stats={stats}/>
        </div>

      </div>
      
    </figure>
  );
}

PokemonCard.defaultProps = {
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
