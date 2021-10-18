import { AbilitiesModel } from "./abilities/abilities.model";
import { OtherModel } from "./other.model";
export interface PokemonDetailsModel {
  name: string;
  weight: number;
  abilities: AbilitiesModel[];
  sprites: OtherModel;
  height: number;
}
