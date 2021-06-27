export const POKEAPI_URL = 'https://pokeapi.co/api/v2';

export type QueryResponse = {
  count: number;
  next: string;
  previous: string;
  results: NamedAPIResource[];
}

export type Name = {
  name: string;
  language: NamedAPIResource; // => Language
};

export type NamedAPIResource = {
  name: string;
  url: string;
};

export type VerboseEffect = {
  effect: string;
  short_effect: string;
  language: NamedAPIResource;
};

// /////////////////////////////////////////////////////
// /////////////////////////////////////// ABILITY TYPES
export type Ability = {
  id: number;
  name: string;
  is_main_series: boolean;
  generation: NamedAPIResource; // => Generation
  
  names: Name[];
  effect_entries: VerboseEffect[];
  // effect_changes: AbilityEffectChange[];
  // flavor_text_entries: AbilityFlavorText[];
  // pokemon: AbilityPokemon[];
};

// export type AbilityEffectChange = {};
// export type AbilityFlavorText = {};
// export type AbilityPokemon = {};

// /////////////////////////////////////////////////////
// /////////////////////////////////////// POKEMON TYPES

export type Pokemon = {
  id: number;
  name: string;
  base_experience: number;
  height: number; // measured in decimeters (1/10 of a meter)
  is_default: boolean;
  order: number;
  weight: number; // measured in hectograms (1/10 of 1 kg)
  
  abilities: PokemonAbility[];
  // forms: NamedAPIResource[]; // => PokemonForm
  // game_indicies: VersionGameIndex[];
  // held_items: PokemonHeldItem[];
  // location_area_encounters: string;
  // moves: PokemonMove[];
  sprites: PokemonSprites;
  species: NamedAPIResource; // => PokemonSpecies
  stats: PokemonStat[];
  types: PokemonType[];
};

export type PokemonAbility = {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource; // => Ability
};
// export type VersionGameIndex = {};
// export type PokemonHeldItem = {};
// export type PokemonMove = {};
export type PokemonSprites = { // originally these were just strings but it seems that they can sometimes be null?
  front_default: string | null;
  front_shiny: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  back_shiny_female: string | null;
};
export const POKEMON_SPRITE_WIDTH = 96;
export const POKEMON_SPRITE_HEIGHT = 96;

export type PokemonStat = {
  stat: NamedAPIResource; // => Stat
  effort: number;
  base_stat: number;
};

export type PokemonType = {
  slot: number;
  type: NamedAPIResource; // => Type
};

// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////
