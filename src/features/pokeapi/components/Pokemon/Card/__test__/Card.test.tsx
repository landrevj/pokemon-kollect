import { fireEvent, render, screen } from '../../../../../../../.jest/test-utils';
import { capitalize } from 'lodash';

import { PokemonCard } from '../Card';

import pikachu from '../../../../pikachu.json';
import { NamedPokemon } from '../../../../../catch';
const pokemon: NamedPokemon = pikachu;
const POKEMON_NAME = 'POKEMON_NAME';
pokemon.userDefinedName = POKEMON_NAME;

describe('PokemonCard', () => {

  it('renders with no image button/link and no release button when the right things aren\'t set', async () => {
    render(<PokemonCard id={pokemon.name} pokemon={pokemon} />);

    // should always be present
    expect(screen.getByRole('article', { name: `${pokemon.name} card` })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: `${pokemon.userDefinedName} (${capitalize(pokemon.name)})` })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'View Abilities'})).toBeInTheDocument();

    // should only show up when certain things are set
    expect(screen.queryByRole('link', { name: `link to ${pokemon.name}'s page` })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'select pokemon' })).not.toBeInTheDocument();
  });

  it('renders with a link when linkToPokemon is true', async () => {
    render(<PokemonCard id={pokemon.name} pokemon={pokemon} linkToPokemon />);

    expect(screen.getByRole('link', { name: `link to ${pokemon.name}'s page`})).toBeInTheDocument();
  });

  it('renders with a button when onClickPokemon is given a function', async () => {
    render(<PokemonCard id={pokemon.name} pokemon={pokemon} onClickPokemon={jest.fn()} />);

    expect(screen.getByRole('button', { name: 'select pokemon'})).toBeInTheDocument();
  });

  it('renders with a button when onReleasePokemon is given a function', async () => {
    render(<PokemonCard id={pokemon.name} pokemon={pokemon} onReleasePokemon={jest.fn()} />);

    expect(screen.getByRole('button', { name: 'Release'})).toBeInTheDocument();
  });

});
