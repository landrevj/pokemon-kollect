import React from 'react';

import { Pokemon } from '../../types';
import { Modal } from '../../../../components';
import { PokemonAbilityList } from './AbilityList';

interface PokemonAbilityModalProps
{
  id: string;
  pokemon: Pokemon;
  isOpen?: boolean;
  onRequestClose?: (event: React.MouseEvent | React.KeyboardEvent) => void;
}

export function PokemonAbilityModal({ id, pokemon, isOpen, onRequestClose }: PokemonAbilityModalProps)
{
  return (
    <Modal id={`${id}AbilityModal`} label={`${pokemon.name} ability modal`} isOpen={!!isOpen} onRequestClose={onRequestClose}>
      <PokemonAbilityList pokemon={pokemon}/>
    </Modal>
  );
}

PokemonAbilityModal.defaultProps = {
  isOpen: undefined,
  onRequestClose: undefined,
};
