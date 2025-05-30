// PokemonListResponse
// PokemonListItem

export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  results: PokemonListItem[];
}

interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonDetail {
  name: string;
  abilities: Ability[];
  height: number;
  weight: number;
  id: number;
  sprites: string;
  types: PokemonType[];
  base_experience: number;
  stats: [];
}

interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

interface PokemonSprites {
  other: {
    "official-artwork": {
      front_default: string;
    };
  };
}

// species
export interface PokemonSpecies {
  color: {
    name: string;
  };
}
