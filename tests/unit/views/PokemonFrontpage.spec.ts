import { shallowMount } from "@vue/test-utils";
import PokemonFrontpage from "@/views/PokemonFrontpage.vue";

describe("PokemonFrontpage.vue", () => {
  it("renders component", () => {
    const wrapper = shallowMountComponent();
    expect(wrapper.find(".PokemonFrontpage").exists()).toBe(true);
  });

  function shallowMountComponent() {
    return shallowMount(PokemonFrontpage);
  }
});
