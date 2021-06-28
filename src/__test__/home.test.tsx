import { render, screen } from '../../.jest/test-utils';

import Home from '../pages/index';

describe('Home Page', () => {
  
  it('renders', () => {
    render(<Home/>);

    expect( screen.getByRole('heading', { name: 'Pokémon Kollect' }) ).toBeInTheDocument();
    expect( screen.getByRole('link', { name: 'Catch a Pokémon!' }) ).toBeInTheDocument();
  })

});
