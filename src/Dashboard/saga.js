import { put, takeEvery } from "redux-saga/effects";
import uid from "uid";
import * as Actions from "./actions";
import mockData from "../mocks/sample.json";

function* getData() {
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
