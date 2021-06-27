import React from 'react';
import { Ability } from '../../types';

interface AbilityCardProps
{
  ability: Ability;
  verbose?: boolean;
}

export function AbilityCard({ ability, verbose }: AbilityCardProps)
{
  console.log(ability.names)
  const englishName = ability.names.find(name => name.language.name === 'en');
  const englishEffect = ability.effect_entries.find(entry => entry.language.name === 'en');

  return (
    <article className='bg-gray-200 p-4 flex flex-col gap-2 rounded'>
      <header>{englishName?.name}</header>
      <hr className='border-gray-300'/>

      {verbose ?
        <p>
          {englishEffect?.effect}
        </p>
      :
        <p>
          {englishEffect?.short_effect}
        </p>
      }

    </article>
  );
}

AbilityCard.defaultProps = {
  verbose: undefined,
};
