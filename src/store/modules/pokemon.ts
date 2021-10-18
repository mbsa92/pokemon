import { createModule, action, mutation } from "vuex-class-component";
import { SearchPokemonModel } from "@/models/searchPokemon.model";
import { PokemonDetailsModel } from "@/models/pokemonDetails.model";
import { pokemonService } from "@/services/pokemon.service";

const VuexModule = createModule({
  namespaced: "pokemon",
  strict: false,
});

export class PokemonStore extends VuexModule {
  private pokemons: SearchPokemonModel = {
    count: 0,
    next: "",
    previous: "",
    results: [],
  };
  private pokemonsWithDetails: PokemonDetailsModel[] = [];
  private limit = "";
  private offset = "";

  get allPokemon(): SearchPokemonModel {
    return this.pokemons;
  }

  get aktiveLimit(): string {
    return this.limit;
  }

  get aktiveOffset(): string {
    return this.offset;
  }

  get allPokemonsWithDetails(): PokemonDetailsModel[] {
    return this.pokemonsWithDetails;
  }

  @mutation setPokemons(pokemon: SearchPokemonModel) {
    this.pokemons = pokemon;
  }

  @mutation removePokemons() {
    this.pokemonsWithDetails = [];
  }

  @mutation setPokemonsWithDetails(pokemonDetails: PokemonDetailsModel) {
    this.pokemonsWithDetails.push(pokemonDetails);
  }

  @mutation setLimit(limit: string) {
    this.limit = limit;
  }

  @mutation setOffset(offset: string) {
    this.offset = offset;
  }

  @action async getPokemons(data: {
    limit: string;
    offset: string;
  }): Promise<void> {
    const result: SearchPokemonModel = await pokemonService.getPokemon(
      data.limit,
      data.offset
    );
    this.setPokemons(result);
  }

  @action async getDetails(url: string): Promise<void> {
    const result: PokemonDetailsModel = await pokemonService.getPokemonDetails(
      url
    );
    this.setPokemonsWithDetails(result);
  }
}
