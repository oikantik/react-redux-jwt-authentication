import { fork } from "redux-saga/effects";
import watcheEverything from "./watchers";

export default function* startForman() {
  yield fork(watcheEverything);
}
