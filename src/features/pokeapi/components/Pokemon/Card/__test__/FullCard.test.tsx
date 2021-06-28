import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from '../../../../../../../.jest/test-utils';
import { Ability, POKEAPI_URL, Pokemon } from '../../../../types';
import { capitalize } from 'lodash';

import { PokemonFullCard } from '../FullCard';

import pikachu from '../../../../pikachu.json';
import pikachuAbilities from '../../../../pikachuAbilities.json';
const pokemon: Pokemon = pikachu;

// export const handlers = [
//   rest.get(POKEAPI_URL.concat('/ability/static'), (req, res, ctx) => {
//     return res(ctx.json(staticAbility), ctx.delay(150));
//   }),
//   rest.get(POKEAPI_URL.concat('/ability/lightning-rod'), (req, res, ctx) => {
//     return res(ctx.json(lightningRodAbility), ctx.delay(150));
//   })
// ];

// const server = setupServer(...handlers);
// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());


describe('PokemonFullCard', () => {

  it('renders', async () => {
    render(<PokemonFullCard pokemon={pokemon} />);

    expect(screen.getByRole('heading', { name: capitalize(pokemon.name) })).toBeInTheDocument();
  });

});
