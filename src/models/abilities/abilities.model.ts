import { AbilityModel } from "./ability.model";

export interface AbilitiesModel {
  is_hidden: boolean;
  slot: number;
  ability: AbilityModel;
}
