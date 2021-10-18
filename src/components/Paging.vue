<template>
  <div class="Paging">
    <button
      type="button"
      v-if="disablePrev"
      class="Paging-prev"
      @click="previous()"
    >
      Previous
    </button>
    <button
      type="button"
      v-if="disableNext"
      class="Paging-next"
      @click="next()"
    >
      Next
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { vxm } from "../store/store";

export default defineComponent({
  name: "Paging",

  emits: ["click"],
  setup(props, { emit }) {
    const disablePrev = computed<Boolean>(
      () => parseFloat(vxm.pokemon.aktiveOffset) !== 0
    );

    const disableNext = computed<Boolean>(
      () =>
        parseFloat(vxm.pokemon.aktiveOffset) !== vxm.pokemon.allPokemon.count
    );

    function next() {
      emit("click", "next");
    }
    function previous() {
      emit("click", "prev");
    }

    return {
      next,
      previous,
      disablePrev,
      disableNext,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "src/styles/components/paging";
</style>
