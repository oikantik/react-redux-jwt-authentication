import { call, put } from "redux-saga/effects";
import loginMiddleware from "../middleware/loginMiddleware";
import * as types from "../actions";

export default function* loginSaga(payload) {
  try {
    const response = yield call(loginMiddleware, payload);
    yield put({
      type: types.LOGIN_USER_SUCCESS,
      user: response.data
    });
  } catch (error) {
    yield put({
      type: types.LOGIN_USER_ERROR,
      error: error.response.data
    });
  }
}
