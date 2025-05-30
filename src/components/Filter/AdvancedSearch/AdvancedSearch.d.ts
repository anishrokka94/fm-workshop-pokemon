export interface PokemonSearchParams {
  searchText?: string;
  types?: string[];
}

export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  habitat: string;
  classification: string;
  image: string;
}

export interface AdvancedSearchProps {
  onSearch: (results: Pokemon[]) => void;
}
