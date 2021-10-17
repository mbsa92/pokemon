import { shallowMount } from "@vue/test-utils";
import PokemonFrontpage from "@/views/PokemonFrontpage.vue";

describe("PokemonFrontpage.vue", () => {
  it("renders component", () => {
    const wrapper = shollowMountComponent();
    expect(wrapper.find(".PokemonFrontpage").exists()).toBe(true);
  });

  function shollowMountComponent() {
    return shallowMount(PokemonFrontpage);
  }
});
