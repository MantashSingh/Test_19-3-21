

import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import imagePath from '../../constants/imagePath';
import actions from '../../redux/actions';

import store from '../../redux/store';

const{dispatch} = store

export default class Profile extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={()=>actions.onLogout()}> 
                    <Image source={imagePath.logout} style={styles.logout} />
                </TouchableOpacity>
                <Text style={styles.logoutText}> LOGOUT </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
logout:{
    width:70,
    height:70 , 
    marginLeft:'auto',
    marginRight:'auto',
    marginVertical:50

},
logoutText:{
    fontSize:30,
    marginLeft:'auto',
    marginRight:'auto',
}

})
