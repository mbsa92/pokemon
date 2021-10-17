import { flushPromises } from "@vue/test-utils";
import axios from "axios";
import { pokemonService } from "@/services/pokemon.service";

describe("pokemon.service.ts", () => {
  it("can get pokemons", async () => {
    const axiosSpy = spyOn(axios, "get").and.returnValue(Promise.resolve());
    pokemonService.getPokemon();
    await flushPromises();
    expect(axiosSpy).toBeCalled();
  });
});
