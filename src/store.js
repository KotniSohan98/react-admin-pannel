import { createStore, applyMiddleware } from "redux";
import reactAdminReducers from "./storeData/reactAdminReducers";
import { thunk } from "redux-thunk";

const store = createStore(reactAdminReducers, applyMiddleware(thunk));

export default store;
