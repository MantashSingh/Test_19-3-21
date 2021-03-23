import React, { Component } from "react";
import {  TextInput , StyleSheet} from "react-native";


function TextaInputComponent({placeholder , onChangeText ,secureTextEntry , onfocus , value , keyboardType}){

    return(
        <TextInput 
        style={styles.input}
        placeholder = {placeholder}
        onChangeText = {onChangeText}
        secureTextEntry={secureTextEntry}
        onFocus={onfocus}
        value={value}
        keyboardType={keyboardType}

        ></TextInput>

        


    )



}
export default TextaInputComponent

const styles = StyleSheet.create({
    input:{
        borderColor:'gray',
        borderWidth:0.4,
        marginTop:10,
        marginLeft:30,
        marginRight:30,
        paddingLeft:20,
        fontSize:18,
        backgroundColor:"white",
        borderRadius:10
        
        
    }


})