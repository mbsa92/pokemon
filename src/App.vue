<template>
  <main>
    <PokemonFrontpage />
  </main>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import PokemonFrontpage from "@/views/PokemonFrontpage.vue";

export default defineComponent({
  name: "App",
  components: {
    PokemonFrontpage,
  },
});
</script>
<style lang="scss">
@import "src/styles/main";
</style>
