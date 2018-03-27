import { shallow, createLocalVue, mounted } from "@vue/test-utils";
import listTopics from "../list-topics";
import Vuex from 'vuex';
import Actions from '../../../store/http-commom';


const localVue = createLocalVue();
localVue.use(Vuex);

describe("App is Instance  from vue", () => {

  beforeEach(() => {
    actions = {
      actionClick: jest.fn(),
      actionInput: jest.fn()
    }
    store = new Vuex.Store({
      state: {},
      actions
    })

  })
  test("is a Vue instance", () => {
    const wrapper = mounted(listTopics)

    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  // test("is a Vue instance", () => {
  //   const wrapper = shallow(Actions, { store, localVue })
  //   const input = wrapper.find('input')
  //   input.element.value = 'input'
  //   input.trigger('input')
  //   expect(actions.actionInput).toHaveBeenCalled()
  //   // expect(wrapper.isVueInstance()).toBeTruthy();
  // });
});
