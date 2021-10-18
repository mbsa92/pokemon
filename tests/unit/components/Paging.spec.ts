import { shallowMount } from "@vue/test-utils";
import Paging from "@/components/Paging.vue";

describe("CardPerPage.vue", () => {
  it("renders component", () => {
    const wrapper = shallowMountComponent();
    expect(wrapper.find(".Paging").exists()).toBe(true);
    expect(wrapper.findAll("button")[0].text()).toEqual("Previous");
    expect(wrapper.findAll("button")[1].text()).toEqual("Next");
  });

  it("can emit buttonclick", () => {
    const wrapper = shallowMountComponent();
    wrapper.find(".Paging-prev").trigger("click");
    expect(wrapper.emitted()).toBeTruthy();
  });

  function shallowMountComponent() {
    return shallowMount(Paging);
  }
});
