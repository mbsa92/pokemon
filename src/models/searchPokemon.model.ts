import { PokemonModel } from "./pokemon.model";
export interface SearchPokemonModel {
  count: number;
  next: string;
  previous: string;
  results: PokemonModel[];
}
