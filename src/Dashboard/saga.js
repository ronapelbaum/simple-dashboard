import { put, takeEvery, delay } from "redux-saga/effects";
import uid from "uid";
import * as Actions from "./actions";
import mockData from "../mocks/sample.json";

function* getData() {
  yield delay(1500);
  const { data, title } = yield mockData;

  const dataWithId = data.map((c) => ({
    ...c,
    id: uid(),
  }));

  yield put(Actions.setData(dataWithId, title));
}

export default function* DashboardSaga() {
  yield takeEvery(Actions.Types.GET_DATA, getData);
}
