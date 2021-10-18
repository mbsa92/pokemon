<template>
  <div class="PokemonFrontpage">
    <h1>PokemonFrontpage</h1>
    <CardPerPage @click="perpage" />
    <div class="PokemonFrontpage-grid">
      <div v-for="details in pokemonDetails" :key="details.name">
        <PokemonCard :pokemon="details" />
      </div>
    </div>
    <Paging @click="skipPage" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import { vxm } from "../store/store";
import { PokemonDetailsModel } from "@/models/pokemonDetails.model";
import PokemonCard from "@/components/PokemonCard.vue";
import CardPerPage from "@/components/CardPerPage.vue";
import Paging from "@/components/Paging.vue";

export default defineComponent({
  name: "PokemonFrontpage",
  components: { PokemonCard, CardPerPage, Paging },
  setup() {
    const pokemonDetails = computed<PokemonDetailsModel[]>(
      () => vxm.pokemon.allPokemonsWithDetails
    );

    const defaultLimit = "20";
    const defaultOffset = "0";

    onMounted(async () => {
      getPokemons(defaultLimit, defaultOffset);
    });

    async function getPokemons(limit: string, offset: string) {
      vxm.pokemon.setLimit(limit);
      vxm.pokemon.setOffset(offset);
      vxm.pokemon.removePokemons();
      const data = { limit, offset };
      await vxm.pokemon.getPokemons(data);
      const pokomons = vxm.pokemon.allPokemon;
      pokomons.results.forEach((pokemon: any) => {
        vxm.pokemon.getDetails(pokemon.url);
      });
    }

    function perpage(value: string) {
      getPokemons(value, "0");
    }

    function skipPage(value: string) {
      const offset = vxm.pokemon.aktiveOffset;
      const limit = vxm.pokemon.aktiveLimit;
      if (value === "next") {
        const skipOffset = parseFloat(offset) + 20;
        vxm.pokemon.setOffset(String(skipOffset));
        getPokemons(limit, String(skipOffset));
      } else if (value === "prev") {
        const skipOffset = parseFloat(offset) - 20;
        vxm.pokemon.setOffset(String(skipOffset));
        getPokemons(limit, String(skipOffset));
      }
    }
    return {
      pokemonDetails,
      perpage,
      defaultLimit,
      getPokemons,
      skipPage,
      defaultOffset,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "src/styles/views/pokemonFrontpage";
</style>
