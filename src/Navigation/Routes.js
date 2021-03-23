import React ,{useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import {connect } from "react-redux"



const Stack = createStackNavigator();

 

function Routes(props) {
    // const userDataContext = useContext(userContext);
    const {isLoggedin, userData}=props;
     console.log("in routes=> ", userData)
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
         
      {isLoggedin?<>{MainStack()}</>:<>{AuthStack()}</>}
      

       {/* {AuthStack()}
       {MainStack()} */}


      </Stack.Navigator>
    </NavigationContainer>
  );
}


const mapStateToProps=state=>{
  return {
      isLoggedin: state.auth.isLoggedin,
      userData:state.auth.userData,
  }
}

export default connect(mapStateToProps)(Routes);