import { createStore } from "redux";
import todoReducer from "./reducers";
import { TodoState } from "../types";

const store = createStore<TodoState, any, any, any>(todoReducer)

export default store;