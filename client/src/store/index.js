import { configureStore } from "redux";


const reducerFunction = (state = { counter: 0 }, action) => {
  return state;
}

const store = configureStore(reducerFunction);

export default store;