import { shallowMount } from "@vue/test-utils";
import PokemonCard from "@/components/PokemonCard.vue";
import { getPokemonDetails } from "../utils/testdata";

describe("PokemonCard.vue", () => {
  it("renders component", () => {
    const wrapper = shallowMountComponent();
    expect(wrapper.find(".PokemonCard").exists()).toBe(true);
  });

  function shallowMountComponent() {
    return shallowMount(PokemonCard, {
      props: {
        pokemon: getPokemonDetails,
      },
    });
  }
});
