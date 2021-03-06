import React from 'react';
import { Ability } from '../../types';

interface AbilityCardProps
{
  ability: Ability;
  verbose?: boolean;
}

export function AbilityCard({ ability, verbose }: AbilityCardProps)
{
  const englishName = ability.names.find(name => name.language.name === 'en');
  const englishEffect = ability.effect_entries.find(entry => entry.language.name === 'en');
  const englishFlavorText = ability.flavor_text_entries.find(flavor => flavor.language.name === 'en');

  return (
    <article className='bg-gray-200 p-4 flex flex-col gap-2 rounded' aria-label={englishName?.name || 'unnamed ability'}>
      <h1>{englishName?.name}</h1>
      <hr className='border-gray-300'/>

      {verbose ?
        /* use some fallbacks for both since some abilities wont have the desired property */
        <p aria-label='ability description'>
          {englishEffect?.effect || englishEffect?.short_effect || englishFlavorText?.flavor_text}
        </p>
      :
        <p aria-label='ability description'>
          {englishEffect?.short_effect || englishEffect?.effect || englishFlavorText?.flavor_text}
        </p>
      }

    </article>
  );
}

AbilityCard.defaultProps = {
  verbose: undefined,
};
