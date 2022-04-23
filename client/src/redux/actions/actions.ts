import { Dispatch } from "redux";
import axios from "axios";

import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  DELETE_ONE_POST,
} from "../actionTypes/actionTypes";

const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};

const fetchPostsSuccess = (posts: Array<{}>[]) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};

const fetchPostsFailure = (error: string) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error,
  };
};

const deleteOnePost = (id: string) => {
  return {
    type: DELETE_ONE_POST,
    payload: id,
  };
};

export const fetchPosts = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchPostsRequest());
    axios
      .get("http://localhost:5000/posts")
      .then((response) => {
        const posts = response.data;
        dispatch(fetchPostsSuccess(posts));
      })
      .catch((error) => {
        dispatch(fetchPostsFailure(error.message));
      });
  };
};

export const deletePost = (id: string) => {
  return (dispatch: Dispatch) => {
    dispatch(deleteOnePost(id));
    axios.delete(`http://localhost:5000/posts/${id}`);
  };
};
