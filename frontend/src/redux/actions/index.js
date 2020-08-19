import { NAME } from "./actionTypes";

export const setName = (e) => {
  console.log("setname", e);
  return {
    type: NAME,
    text: e.target.value,
  };
};
