import { render, screen } from '../../../../../../.jest/test-utils';

import { PokemonList } from '../List';

import { Pokemon } from '../../../types';
import pokemonList from '../../../pokemonList.json';
const pokemon: Pokemon[] = pokemonList;

describe('PokemonList', () => {

  it('renders', async () => {
    render(<PokemonList pokemon={pokemon} />);

    pokemon.forEach(poke => {
      expect(screen.getByRole('article', { name: `${poke.name} card` })).toBeInTheDocument();
    })
  });

});
