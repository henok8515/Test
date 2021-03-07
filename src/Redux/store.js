import { createStore, applyMiddleware } from "redux";
import Logger from "redux-logger";
import Rootreducer from "./Rootreducer";

const middleware = [Logger];
const store = createStore(Rootreducer, applyMiddleware(...middleware));
export default store;
