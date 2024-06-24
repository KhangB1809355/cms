import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitState {
    InitList: [],
    InitObj: []
}

type GetInitAction = PayloadAction<any[]>

const initSlice = createSlice({
    name: "init",
    initialState: {} as InitState,
    reducers: {
        getInit() {},
        setInit: (state: InitState, action: GetInitAction)=>{
           
        }
    }
})

export const { getInit, setInit } = initSlice.actions
export default initSlice.reducer