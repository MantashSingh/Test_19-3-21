import {useState} from 'react';
import {clearUserData} from '../../utils/utils';

import ActionTypes from '../types';

const initialState = {
  userData: {},
  isLoggedin: false,
  

};
export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN: {
      const userData = action.payload;
      console.log(userData, 'r');
      return {...state};
    }
    case ActionTypes.ISLOGIN: {
      const {res} = action.payload;
      return {...state, isLoggedin: true, userData: {...res}};
    }
    case ActionTypes.ON_LOGOUT: {
      clearUserData();
      return {...state, isLoggedin: false, userData: {}};
    }

    case ActionTypes.OTP_VERIFY: {
      const userData = action.payload;
      console.log(userData, 'reducer');
      return {...state, isLoggedin: true, userData};
    }
    // case ActionTypes.USER_SEARCH: {
    //     const userSearch = {...action.payload}

      
    //   return {...state, userSearch};
    // }

    default: {
      return {...state};
    }
  }
}
