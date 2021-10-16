<template>
  <div class="PokemonFrontpage">
    <h1>PokemonFrontpage</h1>
    <PokemonCard />
    {{ pokemonDetails }}
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
