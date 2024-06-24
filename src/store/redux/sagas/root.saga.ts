import { all } from "redux-saga/effects";
import { InitSaga } from "./watchers/init.saga.ts";

export default function* rootSaga(){
    yield all([...InitSaga])
}