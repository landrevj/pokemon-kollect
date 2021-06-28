import { render, screen } from '../../../../../../.jest/test-utils';

import { AbilityCard } from '../Card';

import { Ability } from '../../../types';
import pikachuAbilities from '../../../pikachuAbilities.json';
const staticAbility: Ability = pikachuAbilities[0];

// change the texts to simpler things to test for
// the longer ones tend to trip up getByText
const longEffectText = staticAbility.effect_entries[1].effect = 'long';
const shortEffectText = staticAbility.effect_entries[1].short_effect = 'short';
const flavorEffectText = staticAbility.flavor_text_entries[0].flavor_text = 'flavor';

describe('PokemonCard', () => {

  it('renders', async () => {
    render(<AbilityCard ability={staticAbility}/>);

    expect(screen.getByRole('article', { name: 'Static' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Static' })).toBeInTheDocument();
  });

  it('uses terse text when verbose is false', async () => {
    render(<AbilityCard ability={staticAbility}/>);

    expect(screen.getByText(shortEffectText)).toBeInTheDocument();
  });

  it('uses verbose text when verbose is true', async () => {
    render(<AbilityCard ability={staticAbility} verbose/>);

    expect(screen.getByText(longEffectText)).toBeInTheDocument();
  });

  it('uses flavor text when long/short verions aren\'t present', async () => {

    const ability: Ability = { ...staticAbility };
    ability.effect_entries[1].effect = null;
    ability.effect_entries[1].short_effect = null;

    render(<AbilityCard ability={ability} verbose/>);

    expect(screen.getByText(flavorEffectText)).toBeInTheDocument();
  });

});
