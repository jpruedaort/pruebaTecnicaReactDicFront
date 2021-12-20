import createDeleteReducer from "./createdelete";
import getPostReducer from "./getPosts";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  createDeleteReducer: createDeleteReducer,
  getPostReducer: getPostReducer,
});

export default allReducers;
