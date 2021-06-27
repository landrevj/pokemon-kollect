import React from 'react';

import { Ability } from '../../types';
import { AbilityCard } from './Card';

interface AbilityListProps
{
  loading?: boolean;
  abilities: Ability[];
}

const skeletons = (
  <>
    <div className='w-[30rem] h-24 bg-gray-300 animate-pulse rounded'/>
    <div className='w-[30rem] h-20 bg-gray-300 animate-pulse rounded'/>
  </>
)

export function AbilityList({ loading, abilities }: AbilityListProps)
{
  return (
    <ul className='flex flex-col gap-4'>
      {loading ? skeletons :
      abilities.map((ability, i) => {
        
        return (
          <li key={i}><AbilityCard ability={ability} /></li>
        );
      })}
    </ul>
  );
}

AbilityList.defaultProps = {
  loading: undefined,
};
