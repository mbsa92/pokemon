<template>
  <div class="PokemonCard">
    <h2 class="PokemonCard-name">{{ pokemon.name }}</h2>
    <div>
      <img class="PokemonCard-img" :src="imgUrl" :alt="pokemon.name" />
    </div>
    <div>
      <div class="PokemonCard-weight-wrapper">
        <span>Weight:</span>
        <span>{{ pokemon.weight }}</span>
      </div>
      <div class="PokemonCard-ability-wrapper">
        <span>Ability: </span>
        <div>
          <span v-for="ability in pokemon.abilities" :key="ability.slot">
            <span>{{ ability.ability.name }}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, onMounted } from "vue";
import { PokemonDetailsModel } from "@/models/pokemonDetails.model";

export default defineComponent({
  name: "PokemonCard",
  props: {
    pokemon: {
      type: Object as PropType<PokemonDetailsModel>,
      required: true,
    },
  },
  setup(props) {
    const imgUrl = ref();

    onMounted(async () => {
      imgUrl.value =
        props.pokemon.sprites.other["official-artwork"].front_default;
    });

    return { imgUrl };
  },
});
</script>
<style lang="scss" scoped>
@import "src/styles/components/pokemonCard";
</style>
