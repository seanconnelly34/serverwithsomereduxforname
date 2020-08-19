import { combineReducers } from "redux";

const initialState = {
  name: "",
};

function addReducer(state = initialState, action) {
  switch (action.type) {
    case "NAME":
      return { ...state, name: action.text };
    default:
      return state;
  }
}

export default addReducer;
