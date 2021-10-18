<template>
  <div class="CardPerPage">
    <span class="CardPerPage-title"> Results per page: </span>
    <button type="button" class="CardPerPage-button" @click="perPage('10')">
      10
    </button>
    <button type="button" class="CardPerPage-button" @click="perPage('20')">
      20
    </button>
    <button type="button" class="CardPerPage-button" @click="perPage('50')">
      50
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardPerPage",

  emits: ["click"],
  setup(props, { emit }) {
    function perPage(limit: string) {
      emit("click", limit);
    }
    return {
      perPage,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "src/styles/components/cardPerPage";
</style>
