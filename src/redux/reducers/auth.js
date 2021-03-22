import { clearUserData } from "../../utils/utils";
import ActionTypes from "../types";


const initialState={
    userData:{},
    isLoggedin:false,
}
export default function counterReducer(state=initialState, action){

    switch(action.type){
        case ActionTypes.LOGIN:
            const {userData}={...action.payload};
            return{...state,userData, isLoggedin:true}
        
            case ActionTypes.ISLOGIN:
                const {res}=action.payload;
                return{...state,isLoggedin:true, userData:{...res}}

            case ActionTypes.ON_LOGOUT:
                clearUserData();
                return{...state,isLoggedin:false,userData:{}}
        default:
            {
               return {...state}
            }
    }

}