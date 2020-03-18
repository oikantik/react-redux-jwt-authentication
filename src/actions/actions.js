import * as types from "./index";

export const registerUser = user => {
  return {
    type: types.REGISTER_USER,
    user: user
  };
};

export const loginUser = user => {
  return {
    type: types.LOGIN_USER,
    user: user
  };
};

export const showHideModal = () => {
  return {
    type: types.SHOW_HIDE_MODAL
  };
};
