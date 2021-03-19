import React, {Component} from 'react';
import { Text, View ,StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Cart, HomePage, Profile} from "../Screen/index"
import imagePath from '../assets/images/imagePath';


const Tab = createBottomTabNavigator();

function TabRoutes({navigation}) {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Deals" component={HomePage}
      options={{ headerMode: "none",}}
    //    options={{
    //     tabBarIcon: ({ color }) => (
    //       <Image
    //         style={styles.Icon}
    //         source={  imagePath.logoMyntra }/>
    //    )
    //        }}
     />
          
      <Tab.Screen name="Cart" component={Cart}
      options={{ headerShown: false }}
    //   options={{
    //     tabBarIcon: ({ color }) => (
    //       <Image
    //         style={styles.Icon}
    //         source={  imagePath.sale2 }/>
    //    )
    //        }} 
    />
      {/* <Tab.Screen name="Cart" component={Cart}
       options={{
        tabBarIcon: ({ color }) => (
          <Image
            style={styles.Icon}
            source={  imagePath.cartBottom }/>
       )
           }} /> */}
      <Tab.Screen name="Profile" component={Profile}
      options={{ headerShown: false }}
      
    //    options={{
    //     tabBarIcon: ({ color }) => (
    //       <Image
    //         style={styles.Icon}
    //         source={  imagePath.user }/>
    //    )
    //        }}
     />
      {/* <Tab.Screen name="Deals" component={LatestDeals}
       options={{
        tabBarIcon: ({ color }) => (
          <Image
            style={styles.Icon}
            source={  imagePath.tv }/>
       )
           }} /> */}
    </Tab.Navigator>
  );
}


export default TabRoutes;

const styles = StyleSheet.create({
  Icon:{
    width:30,
    height:30,
    marginTop:10
  }
})