import { ACTION_TYPES, Action } from "../actionTypes/actionTypes";

export interface PostState {
  posts: any[];
  loading: boolean;
  error: string;
}

const initialState = {
  posts: [],
  loading: false,
  error: "",
} as PostState;

export const postReducer = (
  state: PostState = initialState,
  action: Action
) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_POSTS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case ACTION_TYPES.FETCH_POSTS_SUCCESS: {
      return {
        loading: false,
        posts: action.payload,
        error: "",
      };
    }
    case ACTION_TYPES.FETCH_POSTS_FAILURE: {
      return {
        loading: false,
        posts: [],
        error: action.payload,
      };
    }

    case ACTION_TYPES.DELETE_ONE_POST: {
      return {
        ...state,
        posts: state.posts.filter((item) => item._id !== action.payload),
      };
    }
    default:
      return state;
  }
};
