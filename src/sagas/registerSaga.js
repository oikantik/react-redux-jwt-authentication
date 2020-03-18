import { put, call } from "redux-saga/effects";
import registerMiddleware from "../middleware/registerMiddleware";
import * as types from "../actions";

export default function* registerSaga(payload) {
  try {
    const response = yield call(registerMiddleware, payload);
    yield put({
      type: types.REGISTER_USER_SUCCESS,
      user: response.data
    });
  } catch (error) {
    yield put({
      type: types.REGISTER_USER_ERROR,
      error: error.response.data
    });
  }
}
