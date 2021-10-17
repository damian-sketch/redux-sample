// where our state is stored (like cash vault)
import { createStore } from "redux";
import reducer from '../reducers';

const initialState = { tech : "React"};
export const store = new createStore(reducer, initialState); // our store to handle the state