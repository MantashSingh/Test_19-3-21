import store from "../store";
import types from "../types";
const {dispatch} = store

export const add=(newArray1 , index1)=>{
  dispatch({
    type:types.QNT_ADD,
      payload:{newArray1 , index1}
})
}



export const sub=(newArray2 , index2)=>{
  dispatch({
    type:types.QNT_SUB,
      payload:{newArray2 , index2}
})
}

export const deleteFromCart=(id)=>{
  dispatch({
      type:types.DELETE,
      payload:{id}
  })
}