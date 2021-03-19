import React, { Component } from 'react'
import { Text, StyleSheet, View, Image  , TouchableOpacity} from 'react-native'
import GoButton from '../../Component/GoButton'
import Header from '../../Component/Header'
import OtpInput from '../../Component/OtpInput'



export default class VerificationScreen extends Component {
            
            onBack=()=>{this.props.navigation.navigate("Login")}
    render() {
        const { navigate } = this.props.navigation;
        // const phone =this.props.route.params.mobile

        return (
            <View>
                <Header textData={'Enter Verification Code'} onBack={this.onBack}/>

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
                    <Text style={styles.footer1}>Didn't receive the code? </Text>
                    <TouchableOpacity
          style={styles.sendOTPTouch}
          onPress={() =>this.props.navigation.navigate("HomePage")
            // navigation.navigate(navigationStrings.VERIFICATION_SCREEN, {mobile:"7988016778" }) 
          }>
          <Text style={styles.sendOTPText}> Go TO HomePage</Text>
        </TouchableOpacity>
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

},
footer1:{
    textAlign:'center',
    marginVertical:50
}, 
sendOTPTouch: {
    backgroundColor: 'black',
    height: 50,
    marginHorizontal: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  sendOTPText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 12,
  },


})
