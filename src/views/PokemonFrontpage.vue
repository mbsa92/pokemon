<template>
  <div class="PokemonFrontpage">
    <h1>PokemonFrontpage</h1>
    <CardPerPage @click="perpage" />
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
import CardPerPage from "@/components/CardPerPage.vue";

export default defineComponent({
  name: "PokemonFrontpage",
  components: { PokemonCard, CardPerPage },
  setup() {
    const pokemonDetails = computed<PokemonDetailsModel[]>(
      () => vxm.pokemon.allPokemonsWithDetails
    );

    const defaultLimit = "20";

    onMounted(async () => {
      getPokemons(defaultLimit);
    });

    async function getPokemons(limit: string) {
      vxm.pokemon.removePokemons();
      await vxm.pokemon.getPokemons(limit);
      const pokomons = vxm.pokemon.allPokemon;
      pokomons.results.forEach((pokemon: any) => {
        vxm.pokemon.getDetails(pokemon.url);
      });
    }

    function perpage(value: string) {
      getPokemons(value);
    }
    return { pokemonDetails, perpage, defaultLimit, getPokemons };
  },
});
</script>
<style lang="scss" scoped>
@import "src/styles/views/pokemonFrontpage";
</style>
