import axios from "axios";

export class PokemonService {
  public async getPokemon() {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
      return response.data;
    } catch (e) {
      return e;
    }
  }

  public async getPokemonDetails(url: string) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      return e;
    }
  }
}

export const pokemonService = new PokemonService();
