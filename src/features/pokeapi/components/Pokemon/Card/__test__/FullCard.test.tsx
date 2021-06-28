import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from '../../../../../../../.jest/test-utils';
import { Ability, POKEAPI_URL, Pokemon } from '../../../../types';
import { capitalize } from 'lodash';

import { PokemonFullCard } from '../FullCard';

import pikachu from '../../../../pikachu.json';
const pokemon: Pokemon = pikachu;

describe('PokemonFullCard', () => {

  it('renders', async () => {
    render(<PokemonFullCard pokemon={pokemon} />);

    expect(screen.getByRole('heading', { name: capitalize(pokemon.name) })).toBeInTheDocument();
  });

});
