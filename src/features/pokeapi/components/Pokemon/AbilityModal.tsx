import React from 'react';

import { PokemonAbility } from '../../types';
import { Modal } from '../../../../components';

interface PokemonAbilityModalProps
{
  abilities: PokemonAbility[];
  isOpen?: boolean;
  onRequestClose?: (event: React.MouseEvent | React.KeyboardEvent) => void;
}

export function PokemonAbilityModal({ abilities, isOpen, onRequestClose }: PokemonAbilityModalProps)
{
  return (
    <Modal label='pokemon ability modal' isOpen={!!isOpen} onRequestClose={onRequestClose}>
      <ul>
        {abilities.map(({ ability }, i) => 
          <li key={i}>
            {ability.name}
          </li>
        )}
      </ul>
    </Modal>
  );
}

PokemonAbilityModal.defaultProps = {
  isOpen: undefined,
  onRequestClose: undefined,
};
