import { shallowMount } from "@vue/test-utils";
import CardPerPage from "@/components/CardPerPage.vue";

describe("CardPerPage.vue", () => {
  it("renders component", () => {
    const wrapper = shollowMountComponent();
    expect(wrapper.find(".CardPerPage").exists()).toBe(true);
    expect(wrapper.findAll("button")[0].text()).toEqual("10");
    expect(wrapper.findAll("button")[1].text()).toEqual("20");
    expect(wrapper.findAll("button")[2].text()).toEqual("50");
  });

  function shollowMountComponent() {
    return shallowMount(CardPerPage);
  }
});
