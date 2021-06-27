import React, { useEffect } from 'react';

import { Pokemon } from '../../types';
import { AbilityList } from '../Abilities';
import { useAppDispatch, useAppSelector } from '../../../../redux';
import { fetchAbilitiesByPokemon, selectAbilities } from '../../abilitySlice';

interface PokemonAbilityModalProps {
  pokemon: Pokemon;
}

export function PokemonAbilityList({ pokemon }: PokemonAbilityModalProps) {
  const dispatch = useAppDispatch();
  const abilities = useAppSelector(selectAbilities);

  const status = useAppSelector(state => state.ability.status);

  useEffect(() => {

    dispatch(fetchAbilitiesByPokemon(pokemon));

  }, [dispatch, pokemon]);

  return (
    <AbilityList abilities={abilities} loading={status === 'idle' || status === 'loading'}/>
  );
}
