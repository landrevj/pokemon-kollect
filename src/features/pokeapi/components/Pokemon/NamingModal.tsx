import { capitalize } from 'lodash';
import React, { useEffect, useState } from 'react';

import { Modal } from '../../../../components';
import { Pokemon } from '../../types';
import { PokemonImage } from './Image';
import { PokemonStat } from './Stats';
import { PokemonStatBubbles } from './Stats/StatBubbles';

interface PokemonNamingModalProps
{
  pokemon?: Pokemon;
  onClickCatch?: (name: string) => void;

  isOpen?: boolean;
  onRequestClose?: (event: React.MouseEvent | React.KeyboardEvent) => void;
}

export function PokemonNamingModal({ pokemon, onClickCatch, isOpen, onRequestClose }: PokemonNamingModalProps)
{
  const capitalizedDefaultName = capitalize(pokemon?.name);

  const [name, setName] = useState(capitalizedDefaultName);
  useEffect(() => {
    setName(capitalizedDefaultName);
  }, [capitalizedDefaultName]);

  return (
    <Modal transparent label='pokemon naming modal' isOpen={!!pokemon && !!isOpen} onRequestClose={onRequestClose} className='border-2 border-white border-dashed'>
      <section className='flex flex-col gap-4'>

        <h1 className='text-3xl text-white'>Name and catch!</h1>
        <hr/>
        
        {pokemon && (
          <>
            <PokemonImage pokemon={pokemon} className='rounded overflow-hidden' animation='animate-bounce'/>
            <div className='flex flex-row flex-wrap gap-2'>
              <PokemonStatBubbles pokemon={pokemon}/>
            </div>
          </>
        )}
        

        <input value={name} onChange={({ target: { value } }) => setName(value) } className='rounded p-2'/>

        <hr/>

        <button type='button' className='button p-2' onClick={onClickCatch && (() => onClickCatch(name)) }>Catch!</button>
      </section>
    </Modal>
  );
}

PokemonNamingModal.defaultProps = {
  pokemon: undefined,
  onClickCatch: undefined,
  isOpen: undefined,
  onRequestClose: undefined,
};

