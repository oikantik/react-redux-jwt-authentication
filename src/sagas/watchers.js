import { takeLatest } from "redux-saga/effects";
import registerSaga from "./registerSaga";
import loginSaga from "./loginSaga";
import * as types from "../actions";

export default function* watchEverything() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
}
