import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS,
} from "./types";
import {} from "../../utils/interfaces/postInterface";

export const fetchPostRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};
export const fetchPostFailure = (error: string) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error,
  };
};
export const fetchPostSuccess = (posts: Array<{}>[]) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};
