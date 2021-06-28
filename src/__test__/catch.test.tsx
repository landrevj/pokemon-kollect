import { render, screen } from '../../.jest/test-utils';

import Catch from '../pages/catch/index';

describe('Catch Page', () => {

  it('renders', async () => {
    render(<Catch />);

    expect(screen.getByRole('link', { name: 'home' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Catchable Pokémon' })).toBeInTheDocument();
  })

});
