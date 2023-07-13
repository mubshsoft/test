import { combineReducers, createStore } from "redux";
import todoReducer from "./reduceres/todo-reducer";

const rootReducer = combineReducers({todoReducer,})
const store = createStore(rootReducer)

export default store
