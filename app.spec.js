import { mount, shallow } from "@vue/test-utils";
import app from "./App";

describe("App", () => {
  test("is a Vue instance", () => {
    const wrapper = shallow(app);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
