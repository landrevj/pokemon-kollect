import React, { useState } from 'react';
import clsx from 'clsx';
import { sample } from 'lodash';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Pokemon, POKEMON_SPRITE_HEIGHT, POKEMON_SPRITE_WIDTH } from '../../types';

import beachshore from '../../../../../public/bgs/beachshore.png';
import city from '../../../../../public/bgs/city.png';
import dampcave from '../../../../../public/bgs/dampcave.png';
import deepsea from '../../../../../public/bgs/deepsea.png';
import desert from '../../../../../public/bgs/desert.png';
import earthycave from '../../../../../public/bgs/earthycave.png';
import forest from '../../../../../public/bgs/forest.png';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

interface PokemonImageProps
{
  pokemon: Pokemon;
  animation?: 'animate-bounce' | 'animate-ping';
  ping?: boolean;
  className?: string;
}

const bgs = [beachshore, city, dampcave, deepsea, desert, earthycave, forest];

export function PokemonImage({ pokemon: { name, sprites }, animation, ping, className }: PokemonImageProps)
{
  const [bgImage] = useState(sample(bgs) || forest);

  return (
    <div className={clsx('relative', className)}>
      <Image
        priority
        layout='responsive'
        src={bgImage}
        alt={`Background sprite`}
        />
        
      <div className={clsx('absolute top-0 w-full h-full flex flex-row justify-center place-items-center', animation)}>
        {sprites.front_default ?
          <Image
            priority
            src={sprites.front_default}
            alt={`Sprite image of ${name}`}
            width={POKEMON_SPRITE_WIDTH}
            height={POKEMON_SPRITE_HEIGHT}
          />
        :
          <div aria-label='pokemon sprite missing' className='text-red-400 space-x-2 bg-black bg-opacity-50 rounded p-2 backdrop-blur'>
            <FontAwesomeIcon icon={faExclamationTriangle}/>
            <span>Sprite missing!</span>
          </div>
        }
      </div>
    </div>
  );
}

PokemonImage.defaultProps = {
  animation: undefined,
  ping: undefined,
  className: '',
};
