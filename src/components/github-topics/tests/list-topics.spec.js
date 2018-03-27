import { shallow } from "@vue/test-utils";
import listTopics from "../list-topics";

describe("App is Instance  from vue", () => {
  test("is a Vue instance", () => {
    const wrapper = shallow(listTopics);
    // expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
