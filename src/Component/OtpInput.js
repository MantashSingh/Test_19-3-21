import React from 'react'
import { View, Text, TextInput , StyleSheet} from 'react-native'

export default function OtpInput() {
    return (
        <View>
            <TextInput 
            maxLength={1}
            keyboardType={'number-pad'}
            style={styles.style}/>
        </View>
    )
}
const styles = StyleSheet.create({
    style:{
borderColor:"black",
borderWidth:1,
width:50,
borderRadius:10,
marginHorizontal:5,
paddingLeft:20

    }
})

