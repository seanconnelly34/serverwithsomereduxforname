import { NAME, ADDRESS } from "./actionTypes";

export const setName = (e) => {
  return {
    type: NAME,
    text: e.target.value,
  };
};

export const setAddress = (e) => {
  return {
    type: ADDRESS,
    text: e.target.value,
  };
};
