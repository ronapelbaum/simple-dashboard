import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import {
  reducer as DashboardReducer,
  saga as ContactListSaga,
} from "./Dashboard";

function* rootSaga() {
  yield all([ContactListSaga()]);
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({
    DashboardReducer,
  }),
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

export default store;
