import axios from "axios";

export class PokemonService {
  async getPokemon(limit: string, offset: string) {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      );
      return response.data;
    } catch (e) {
      return e;
    }
  }

  async getPokemonDetails(url: string) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      return e;
    }
  }
}

export const pokemonService = new PokemonService();
