import React from 'react'
import { View, Text , Image , StyleSheet} from 'react-native'
import imagePath from '../assets/images/imagePath'


export default function Header({textData}) {
    return (
        <View style={{flexDirection:'row'}}>
            <Image source={imagePath.backIcon} style={styles.backIcon} onPress={()=>this.props.navigation.navigate("Login")}
            />
                <Text style={styles.textData}>{textData}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    backIcon:{
        width:30,
        height:30,
        marginVertical:8,
        marginHorizontal:15
    },
    textData:{
        marginVertical:5,
        fontSize:25
    }
})

