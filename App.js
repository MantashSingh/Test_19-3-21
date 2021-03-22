import React , {Component} from 'react';
import { Text, View } from 'react-native';
import Routes from "./src/Navigation/Routes";
import FlashMessage from "react-native-flash-message";
import { clearUserData, getUserData } from './src/utils/utils';
import { userContext } from './src/context/context';
import store from './src/redux/store';

import { connect , Provider } from 'react-redux';
import types from './src/redux/types';




const {dispatch} = store
export default class App extends Component{
  


  componentDidMount(){
    getUserData().then((res)=>{
     if(res){
      dispatch({
        type:types.ISLOGIN,
        payload:{res}
      })
     }
    }) 
  
    
  }

  
    
  
  
  render(){
   
    return(
      <Provider store={store }>
      <Routes/>
      <FlashMessage position="top" />
</Provider>
    )  
  }
}


