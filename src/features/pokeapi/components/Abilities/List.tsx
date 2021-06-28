import React from 'react';

import { Ability } from '../../types';
import { AbilityCard } from './Card';

interface AbilityListProps
{
  verbose?: boolean;
  loading?: boolean;
  abilities: Ability[];
}

const skeletons = (
  <>
    <div className='w-[30rem] h-24 bg-gray-300 animate-pulse rounded'/>
    <div className='w-[30rem] h-20 bg-gray-300 animate-pulse rounded'/>
  </>
)

export function AbilityList({ verbose, loading, abilities }: AbilityListProps)
{
  return (
    loading ? skeletons :
    <ul className='flex flex-col gap-4' aria-label='ability list'>
      {abilities.map(ability =>
        <li key={ability.id}><AbilityCard ability={ability} verbose={verbose} /></li>
      )}
    </ul>
  );
}

AbilityList.defaultProps = {
  verbose: undefined,
  loading: undefined,
};
