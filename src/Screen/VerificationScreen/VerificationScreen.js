import React, { Component } from 'react'
import { Text, StyleSheet, View, Image  , TouchableOpacity,TextInput , Button} from 'react-native'
import GoButton from '../../Component/GoButton'
import Header from '../../Component/Header'
import OtpInput from '../../Component/OtpInput'
import actions from '../../redux/actions'
import { showMessage, hideMessage } from "react-native-flash-message";

import OTPTextView from 'react-native-otp-textinput';



export default class VerificationScreen extends Component {

    state = {
        otpInput: '',
        inputText: '',
      };
    
      



    isValidate = () => {
        const { phoneNumber } = this.state;
    
        let errorMessage = validations({phoneNumber:phoneNumber})
        // alert()
        if (errorMessage) {
    
            showMessage({
                message: errorMessage,
                icon:"warning",
                type: "danger",
            });
            return false
        }
    
        return true
    }

    checkData = () => {
        // alert()
        const{userId} = this.props.route.params;
        const {otpInput} =this.state
    console.log(userId)
       
            actions.OTPVerify({userId , otp:otpInput , deviceToken:"123"
        
            })
                .then(response => {
                   
                        console.log(response ,"   verify")
                        // this.props.navigation.navigate("Ver" , {userId:response.data.userId})
                        
                        
                        
                        showMessage({
                            type:"success",
                            message:"OTP verified "
                        })
                        
                        
                }).catch((error) => {
                    this.setState({ isvalid: false }),
                    showMessage({
                        type:"danger",
                        message:"Login failed "
                    })
                    
                        console.log(error)
                })
        
    
    }
    
    
            
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

                <View>


                <View style={styles.container}>
    
        
        
        
        
        <OTPTextView
          ref={(e) => (this.input1 = e)}
          containerStyle={styles.textInputContainer}
          textInputStyle={[styles.roundedTextInput, {borderRadius: 100}]}
          handleTextChange={(text) => this.setState({otpInput: text})}
          inputCount={5}
          keyboardType="numeric"
        />
      </View>



                   
                </View>

                <View>
                    <Text style={styles.footer1}>Didn't receive the code? </Text>
                    <TouchableOpacity
          style={styles.sendOTPTouch}
          onPress={() =>{this.checkData()}
            // navigation.navigate(navigationStrings.VERIFICATION_SCREEN, {mobile:"7988016778" }) 
          }>
          <Text style={styles.sendOTPText}> Go To HomePage</Text>
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



  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    padding: 5,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center',
    // color: '#333333',
    marginBottom: 20,
  },
  textInputContainer: {
    marginBottom: 20,
  },
  roundedTextInput: {
    // borderRadius: 10,
    borderWidth: 1,
  },
 
  textInput: {
    height: 40,
    width: '80%',
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    letterSpacing: 5,
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonStyle: {
    marginHorizontal: 20,
  },


})
