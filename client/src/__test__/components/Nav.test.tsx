import "jsdom-global/register";
import React from "react";
import { mount } from "enzyme";
import Nav from "../../components/Nav/Nav";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

describe("<Nav/>", () => {
  test("Render de componente Nav", () => {
    const nav = mount(
      <Provider store={store}>
        <Nav />
      </Provider>
    );
    expect(nav.length).toEqual(1);
  });
  test("Render del titulo", () => {
    const nav = mount(
      <Provider store={store}>
        <Nav />
      </Provider>
    );
    expect(nav.find("h1").first().text()).toEqual("HN Feed");
  });
});
