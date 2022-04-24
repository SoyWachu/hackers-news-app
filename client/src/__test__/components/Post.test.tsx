import "jsdom-global/register";
import React from "react";
import { mount } from "enzyme";
import Post from "../../components/Post/Post";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

describe("<Post/>", () => {
  it("Render de componente Post", () => {
    const post = mount(
      <Provider store={store}>
        <Post
          _id="1"
          title="Prueba"
          story_title="Sub titulo"
          author="Prueba"
          created_at="2022"
          story_url="url de prueba"
        />
      </Provider>
    );
    expect(post.length).toEqual(1);
  });
});
