import { createStore } from "vuex";
import { createProxy, extractVuexModule } from "vuex-class-component";
import { PokemonStore } from "@/store/modules/pokemon";

export const store = createStore({
  modules: {
    ...extractVuexModule(PokemonStore),
  },
});

export const vxm = {
  pokemon: createProxy(store, PokemonStore),
};
