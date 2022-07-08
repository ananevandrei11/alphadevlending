import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import speakersReducer from "./speakersReducer";
import thunkMiddleware from "redux-thunk";
import linksReducer from "./linksReducer";

let reducers = combineReducers({
  speakersList: speakersReducer,
  linksList: linksReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers, composeEnhancers(applyMiddleware(thunkMiddleware))
);
window.__store__ = store;
export default store;
