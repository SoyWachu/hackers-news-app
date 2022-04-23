import { createStore, applyMiddleware } from "redux";
import { postReducer } from "./reducer/postReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

export const store = createStore(
  postReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
