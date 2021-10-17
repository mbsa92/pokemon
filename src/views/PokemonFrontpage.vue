<template>
  <div class="PokemonFrontpage">
    <h1>PokemonFrontpage</h1>
    <div class="PokemonFrontpage-grid">
      <div v-for="details in pokemonDetails" :key="details.name">
        <PokemonCard :pokemon="details" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import { vxm } from "../store/store";
import { PokemonDetailsModel } from "@/models/pokemonDetails.model";
import PokemonCard from "@/components/PokemonCard.vue";
export default defineComponent({
  name: "PokemonFrontpage",
  components: { PokemonCard },
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
@import "src/styles/views/pokemonFrontpage";
</style>
