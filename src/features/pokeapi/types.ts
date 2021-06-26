export type Endpoint = 'pokemon';

export type QueryParams = {
  endpoint: Endpoint;
  idOrName?: number | string;
  offset?: number;
  limit?: number;
};

export type QueryResponse = {
  count: number;
  next: string;
  previous: string;
  results: NamedAPIResource[];
}

export type NamedAPIResource = {
  name: string;
  url: string;
};

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
export type PokemonSprites = {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
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
