import { shallowMount } from "@vue/test-utils";
import PokemonCard from "@/components/PokemonCard.vue";

describe("PokemonCard.vue", () => {
  it("renders component", () => {
    const wrapper = shollowMountComponent();
    expect(wrapper.find(".PokemonCard").exists()).toBe(true);
  });

  function shollowMountComponent() {
    return shallowMount(PokemonCard);
  }
});
