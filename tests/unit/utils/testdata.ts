import { PokemonDetailsModel } from "@/models/pokemonDetails.model";
import { PokemonModel } from "@/models/pokemon.model";

export function getPokemon(): PokemonModel[] {
  return [
    {
      name: "test",
      url: "https://test.dk",
    },
    {
      name: "test1",
      url: "https://test1.dk",
    },
  ];
}

export function getPokemonDetails(): PokemonDetailsModel {
  return {
    name: "test",
    weight: 71,
    height: 80,
    abilities: [
      {
        ability: { name: "bla", url: "https//test.dk" },
        is_hidden: false,
        slot: 1,
      },
    ],
    sprites: {
      other: {
        "official-artwork": {
          front_default: "https://test.dk",
        },
      },
    },
  };
}
