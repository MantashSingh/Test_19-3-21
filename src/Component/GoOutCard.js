import React from 'react'
import { View, Text, Image , StyleSheet } from 'react-native'

export default function GoOutCard({data}) {
    return (
        <View>
            <Text>{data._id}</Text>
            <Image source={{uri:data.profileImg[0].original}}  style={styles.profileImage}/>
        </View>
    )
}
const styles = StyleSheet.create({
    profileImage:{
width:90,
height:90
    }
})

