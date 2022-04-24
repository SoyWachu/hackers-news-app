import "jsdom-global/register";
import React from "react";
import { mount } from "enzyme";
import PostList from "../../components/PostList/PostList";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

describe("<PostList/>", () => {
  test("Render de componente PostList", () => {
    const postList = mount(
      <Provider store={store}>
        <PostList />
      </Provider>
    );
    expect(postList.length).toEqual(1);
  });
});
