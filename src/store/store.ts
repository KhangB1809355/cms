import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./redux/sagas/root.saga.ts";
import initSlice from "./redux/slices/initSlice.ts";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
       init : initSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({thunk: false,}).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)


export default store