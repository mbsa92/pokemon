<template>
  <div class="PokemonCard">
    <h2>hej</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, PropType } from "vue";
import { vxm } from "../store/store";
import { PokemonDetailsModel } from "@/models/pokemonDetails.model";

export default defineComponent({
  name: "PokemonCard",
  props: {
    pokemon: {
      type: Object as PropType<PokemonDetailsModel>,
    },
  },
  setup() {
    const pokemonDetails = computed<PokemonDetailsModel[]>(
      () => vxm.pokemon.allPokemonsWithDetails
    );

    onMounted(async () => {
      await vxm.pokemon.getPokemons();
      const pokomons = vxm.pokemon.allPokemon;
      pokomons.results.forEach((pokemon: any) => {
        vxm.pokemon.getDetails(pokemon.url);
      });
    });
    return { pokemonDetails };
  },
});
</script>
<style lang="scss" scoped>
@import "src/styles/components/pokemonCard";
</style>
