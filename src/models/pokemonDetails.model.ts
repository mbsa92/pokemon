import { AbilitiesModel } from "./abilities/abilities.model";
import { OtherModel } from "./other.model";
export interface PokemonDetailsModel {
  name: string;
  weight: number;
  abilites: AbilitiesModel[];
  sprites: OtherModel;
}
