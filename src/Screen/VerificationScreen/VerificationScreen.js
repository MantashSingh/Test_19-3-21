import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import Header from '../../Component/Header'
import OtpInput from '../../Component/OtpInput'



export default class VerificationScreen extends Component {
    render() {
        // const phone =this.props.route.params.mobile
        return (
            <View>
                <Header textData={'Enter Verification Code'}/>

                <View style={{marginVertical:30}}>
                    <Text style={styles.sentCode}>We have sent a verfication code  </Text>
                    {/* <Text style={styles.phone}>+91-{phone}</Text> */}

                </View>

                <View style={{flexDirection:'row',}}>
                    <OtpInput/>
                    <OtpInput/>
                    <OtpInput/>
                    <OtpInput/>
                    <OtpInput/>
                    <OtpInput/>
                    
                </View>

                <View>
                    <Text>Didn't receive the code? </Text>
                    <Text>Resend now</Text>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
   

sentCode:{
 textAlign:'center',
 fontSize:20,
 

},
phone:{
    textAlign:'center',
 fontSize:18,
 marginVertical:5,
 fontWeight:'bold'

}

})
