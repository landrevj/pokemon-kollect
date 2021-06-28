import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, mockUseRouter } from '../../.jest/test-utils';

import Pokemon from '../pages/pokemon/[name]';
import { POKEAPI_URL } from '../features/pokeapi';
import pikachu from '../features/pokeapi/pokemonList.json';

export const handlers = [
  rest.get(POKEAPI_URL.concat('/pokemon/pikachu'), (req, res, ctx) => {
    return res(ctx.json(pikachu), ctx.delay(150));
  }),
];

const server = setupServer(...handlers);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Pokemon Page', () => {

  it('renders', async () => {

    mockUseRouter({
      route: '/pokemon',
      pathname: '/pokemon',
      query: { name: 'pikachu' },
      asPath: '',
    });

    render(<Pokemon />);

    expect(screen.getByRole('link', { name: 'home' })).toBeInTheDocument();
  })

});
