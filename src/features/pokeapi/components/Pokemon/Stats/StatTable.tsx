import React from 'react';

import { PokemonStat } from '../../../types';

interface PokemonStatTableProps
{
  stats: PokemonStat[];
}

export function PokemonStatTable({ stats }: PokemonStatTableProps)
{
  return (
    <table className='w-full'>
      <tbody>
        {stats.map(({ stat: { name }, base_stat }, i) =>
          <tr key={i} className='hover:bg-gradient-to-r from-gray-200 to-gray-100'><td className='text-left font-bold pl-3'>{name}</td><td className='text-right break-all pr-3'>{base_stat}</td></tr>
        )}
      </tbody>
    </table>
  );
}
