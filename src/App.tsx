
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getInit } from "./store/redux/slices/initSlice.ts";

function App(){
  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch({
      type: getInit.type
    })
  },[])

  return (
    <div className="font-bold">
        ĐÂSDASDASDASDASD
    </div>
  );
}

export default App;