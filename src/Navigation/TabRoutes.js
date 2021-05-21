import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Cart, HomePage, Profile} from '../Screen/index';
import imagePath from '../constants/imagePath';
import colors from '../constants/color';

const Tab = createBottomTabNavigator();

function TabRoutes({navigation}) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Order"
        component={HomePage}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Image style={styles.Icon} source={imagePath.order} />
          ),
        }}
      />

      <Tab.Screen
        name="Go Out"
        component={Cart}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Image style={styles.Icon} source={imagePath.goOut} />
          ),
        }}
      />
      <Tab.Screen
        name="Pro"
        component={Cart}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Image style={styles.Icon} source={imagePath.pro} />
          ),
        }}
      />
      <Tab.Screen
        name="Donate"
        component={Profile}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Image style={styles.Icon} source={imagePath.donate} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Profile}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Image style={styles.Icon} source={imagePath.account} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabRoutes;

const styles = StyleSheet.create({
  Icon: {
    width: 25,
    height: 25,
    marginTop: 10,
    tintColor: colors.themeColor,
  },
});
