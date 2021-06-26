import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface PokemonStatProps
{
  icon?: IconProp;
  label: string;
  value: string;
}

export function PokemonStat({ icon, label, value }: PokemonStatProps)
{
  return (
    <span className='bg-white px-2 rounded space-x-2'>
      {icon && <FontAwesomeIcon icon={icon}/>}
      <span aria-label={label}>{value}</span>
    </span>
  );
}
