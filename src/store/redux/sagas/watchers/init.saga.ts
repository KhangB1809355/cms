

import { getInit } from "../../slices/initSlice.ts";
import { takeLatest, fork, call } from "redux-saga/effects"


function* onHandelInitSaga() {
    try {
       
      } catch (error) {
      }
}

function* onHandelRootInitSaga(){
    yield takeLatest(getInit.type, onHandelInitSaga)
}



export const InitSaga = [fork(onHandelRootInitSaga)]




