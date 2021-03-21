import ActtionTypes from '../types';

const initialState = {
  cartAry: [],
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ActtionTypes.ADD_CART:
      const {newfoodItemAry, index} = action.payload;

      if (!state.cartAry.includes(newfoodItemAry[index])) {
        let newAr = [...state.cartAry, newfoodItemAry[index]];
        newfoodItemAry[index].quantity += 1;
        console.log(newAr);
        return {...state, cartAry: [...newAr]};
      }

    case ActtionTypes.QNT_ADD:
      const {newArray1, index1} = action.payload;

      newArray1[index1].quantity += 1;
      
      return {...state, cartAry: [...newArray1]};

    case ActtionTypes.QNT_SUB:
      const {newArray2, index2} = action.payload;

      newArray2[index2].quantity -= 1;
      
      return {...state, cartAry: [...newArray2]};

    default: {
      return {...state};
    }
  }
}
