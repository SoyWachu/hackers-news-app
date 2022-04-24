import { Dispatch } from "redux";
import axios from "axios";

import { ACTION_TYPES } from "../actionTypes/actionTypes";

const fetchPostsRequest = () => {
  return {
    type: ACTION_TYPES.FETCH_POSTS_REQUEST,
  };
};

const fetchPostsSuccess = (posts: any[]) => {
  return {
    type: ACTION_TYPES.FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};

const fetchPostsFailure = (error: string) => {
  return {
    type: ACTION_TYPES.FETCH_POSTS_FAILURE,
    payload: error,
  };
};

const deleteOnePost = (id: string) => {
  return {
    type: ACTION_TYPES.DELETE_ONE_POST,
    payload: id,
  };
};

export const fetchPosts = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchPostsRequest());
    axios
      .get(`/posts`)
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
    axios.delete(`/posts/${id}`);
  };
};
