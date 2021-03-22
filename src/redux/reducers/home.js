import ActionTypes from '../types';
import { showMessage, hideMessage } from "react-native-flash-message";

const initialState = {
  cartAry: [],
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_CART:
      const {newfoodItemAry, index} = action.payload;

      if (!state.cartAry.includes(newfoodItemAry[index])) {
        let newAr = [...state.cartAry, newfoodItemAry[index]];
        newfoodItemAry[index].quantity += 1;
        // console.log(newAr);
        return {...state, cartAry: [ ...newAr]};
      }
      else{
        showMessage({
          type:"warning",
          icon:"warning",
          message:"Already added to cart"
        })
        
      }
      return{...state}
      

    case ActionTypes.QNT_ADD:
      const {newArray1, index1} = action.payload;
      
      newArray1[index1].quantity += 1;
      
      return {...state, cartAry: [...newArray1]};

    case ActionTypes.QNT_SUB:
      const {newArray2, index2} = action.payload;
      if(newArray2[index2].quantity >=2  )
      {
        newArray2[index2].quantity -= 1;
      }
      else{
        showMessage({
          type:"warning",
          icon:"warning",
          message:"At least 1 item required"
        })
      }
     
      
      return {...state, cartAry: [...newArray2]};

      case ActionTypes.DELETE:
            let newDeleteData = state.cartAry
            
            const{id} =action.payload;

            const indx= newDeleteData.findIndex((item)=>item.id == id)
            
            newDeleteData[indx].quantity = 0
            const final= newDeleteData.filter((item)=>item.id !=id);
            // console.log(final)
            return{
                ...state,cartAry:[...final]

            };

    default: {
      return {...state};
    }
  }
}
