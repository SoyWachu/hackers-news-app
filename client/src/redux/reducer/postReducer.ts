import { Action } from "../../utils/types/postTypes";
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  DELETE_ONE_POST,
} from "../actionTypes/actionTypes";

export interface PostState {
  posts: any[];
}

const initialState = {
  posts: [],
  loading: false,
  error: "",
};

export const postReducer = (
  state: PostState = initialState,
  action: Action
) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_POSTS_SUCCESS: {
      return {
        loading: false,
        posts: action.payload,
        error: "",
      };
    }
    case FETCH_POSTS_FAILURE: {
      return {
        loading: false,
        posts: [],
        error: action.payload,
      };
    }

    case DELETE_ONE_POST: {
      return {
        ...state,
        posts: state.posts.filter((item) => item._id !== action.payload),
      };
    }
    default:
      return state;
  }
};
