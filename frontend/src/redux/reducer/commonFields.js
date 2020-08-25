import { NAME, ADDRESS } from "../actions/actionTypes";

const initialState = {
  name: "",
  address: "",
  done: false,
};

export default function commonFields(state = initialState, action) {
  switch (action.type) {
    case NAME:
      return { ...state, name: action.text };
    case ADDRESS:
      return { ...state, address: action.text };
    default:
      return state;
  }
}
