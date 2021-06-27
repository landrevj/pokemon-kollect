import React from 'react';
import { faArrowsAltV, faWeightHanging } from '@fortawesome/free-solid-svg-icons';

import { Pokemon } from '../../../types';
import { PokemonStat } from './Stat';

interface PokemonStatBubblesProps
{
  pokemon: Pokemon;
}

export function PokemonStatBubbles({pokemon: { weight, height, types }}: PokemonStatBubblesProps)
{
  return (
    <>
      <PokemonStat icon={faWeightHanging} label='weight in kilograms' value={`${(weight / 10).toLocaleString()} kg`} />
      <PokemonStat icon={faArrowsAltV} label='height in meters' value={`${(height / 10).toLocaleString()} m`} />

      {types.map(({ type: { name } }, i) =>
        <PokemonStat label={`${name} type`} value={name} key={i} />
      )}
    </>
  );
}
