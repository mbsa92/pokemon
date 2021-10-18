import { vxm } from "@/store/store";
import { getPokemon, getPokemonDetails } from "../utils/testdata";
import { flushPromises } from "@vue/test-utils";
import { pokemonService } from "@/services/pokemon.service";

describe("pokemon.ts", () => {
  it("can get pokemon", async () => {
    const pokemon = getPokemon();
    const limit = "0";

    spyOn(pokemonService, "getPokemon").and.returnValue(
      Promise.resolve(pokemon)
    );
    vxm.pokemon.getPokemons(limit);
    await flushPromises();
    expect(vxm.pokemon.allPokemon).toEqual(pokemon);
  });

  it.skip("can get pokemonDetails", async () => {
    const pokemonDetails = getPokemonDetails();
    const url = "https://pokeapi.co/api/v2/pokemon/2/";
    spyOn(pokemonService, "getPokemonDetails").and.returnValue(
      Promise.resolve(pokemonDetails)
    );
    vxm.pokemon.getDetails(url);
    await flushPromises();
    expect(vxm.pokemon.allPokemonsWithDetails).toEqual(pokemonDetails);
  });
});
