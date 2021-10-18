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

  get allPokemon(): SearchPokemonModel {
    return this.pokemons;
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

  @action async getPokemons(limit: string): Promise<void> {
    const result: SearchPokemonModel = await pokemonService.getPokemon(limit);
    this.setPokemons(result);
  }

  @action async getDetails(url: string): Promise<void> {
    const result: PokemonDetailsModel = await pokemonService.getPokemonDetails(
      url
    );
    this.setPokemonsWithDetails(result);
  }
}
