import store from "../store";
import types from "../types";
const {dispatch} = store




export const addCart=(newfoodItemAry , index)=>{


    dispatch({
        type:types.ADD_CART,
        payload:{newfoodItemAry , index}
    })
}





