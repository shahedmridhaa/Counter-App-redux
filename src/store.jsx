import { createStore } from "redux";
import { countReducer } from "./Sevices/Reducer/Reducer";

export const store = createStore(countReducer)
