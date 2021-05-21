import React, {Component} from 'react';
import {Text, View, TouchableOpacity , StyleSheet,Image , ActivityIndicator  , ImageBackground } from 'react-native';
import imagePath from '../../constants/imagePath';
import Loader from '../../Component/Loader';
import TextInputComponent from '../../Component/TextaInputComponent'
import navigationStrings from '../../constants/navigationStrings';
import { showMessage, hideMessage } from "react-native-flash-message";
import validations from "../../utils/validations";
import apis from "../../apis";
import { userContext } from '../../context/context';

import actions from "../../redux/actions"
import colors from '../../constants/color';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        phoneNumber: "",
        
        isvalid:""
    };
  }
  static contextType=userContext;


  
  setNumber = (text) => {

    this.setState({
        phoneNumber: text
    })


}



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
    const { phoneNumber} = this.state;

    if (this.isValidate()) {
        this.setState({
            isvalid: true
        })
        actions.loginWithOTP({contactDetails:{phoneNo: (phoneNumber),
          countryCode: "+91",
          countryCodeISO: "IN"}
        })
            .then(response => {
               
                    console.log(response +"   1")
                    this.props.navigation.navigate("VerificationScreen" , {userId:response.data.userId})
                    
                    
                    
                    showMessage({
                        type:"success",
                        message:"OTP sent successfully "
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

}


  render() {
      const{isvalid} =this.state
      const { navigate } = this.props.navigation;
    return (
    //   <View style={styles.container}>
       
    //     <View style={styles.header} >
    //       <Text style={styles.login}>Login</Text>
    //     </View>
    //     <View>
    //     <TextInputComponent placeholder="Email" onChangeText={(text) => this.setEmail(text)}  />
    //     <TextInputComponent placeholder="Password" onChangeText={(text) => this.setPassword(text)} secureTextEntry={true}/>
    //     </View>

    //     <View style={{ flexDirection: "row", }}>
    //                 <Text style={styles.alreadyRegister}>Don't have account? </Text>
    //                 <Text style={styles.signup} onPress={()=>this.props.navigation.navigate("Signup")} >Sign up</Text>
                  

    //                 <GoButton onPress={() => this.checkData()} style={styles.goTouch}/>
    //             </View>

               
    //             <Footer diffrentText={"Logging In"}/>

                
    //                 <Loader isvalid={isvalid} />
                





    //   </View>


    <View style={{flex: 1}}>
    <ImageBackground source={imagePath.signUpBg} style={styles.bgImage}>
      <TouchableOpacity style={styles.skipTouch}>
        <Text style={styles.skpiText} onPress={()=>this.props.navigation.navigate("TabRoutes")}>Skip</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        


      <TextInputComponent placeholder="Phone Number" onChangeText={(text) => this.setNumber(text)} keyboardType={"numeric"} />
    {/* <TextInputComponent placeholder="Password" onChangeText={(text) => this.setPassword(text)} secureTextEntry={true}/> */}
        <TouchableOpacity
          style={styles.sendOTPTouch}
          onPress={() =>this.checkData()
            // navigation.navigate(navigationStrings.VERIFICATION_SCREEN, {mobile:"7988016778" }) 
          }>
          <Text style={styles.sendOTPText}> Send OTP</Text>
        </TouchableOpacity>

        
          


        

        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            marginLeft: 30,
            opacity: 0.5,
          }}>
          <View style={styles.line}></View>
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line}></View>
        </View>

        <TouchableOpacity style={styles.emailTouch}>
          <View style={{flexDirection: 'row'}}>
            <Image source={imagePath.mail} style={styles.mailIcon} />
            <Text style={styles.emailText}> Continue with Email</Text>
          </View>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', marginLeft: 20}}>
          <TouchableOpacity style={styles.facebookTouch}>
            <View style={{flexDirection: 'row'}}>
              <Image source={imagePath.facebook} style={styles.mailIcon} />
              <Text style={styles.facebokText}>Facebook </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleTouch}>
            <View style={{flexDirection: 'row'}}>
              <Image source={imagePath.google} style={styles.mailIcon} />
              <Text style={styles.googleText}> Google</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={styles.Tc}>By continuing , you agree to our </Text>

        <View style={{flexDirection: 'row', marginHorizontal: 30}}>
          <Text style={styles.last}>Terms of Service</Text>
          <Text style={styles.last}> Privacy Policy </Text>
          <Text style={styles.last}> Content Policy </Text>
        </View>
      </View>
    </ImageBackground>
  </View>
    );
  }
}


const styles= StyleSheet.create({
    skipTouch: {
        width: 60,
        height: 30,
        backgroundColor: 'black',
        borderRadius: 20,
        opacity: 0.6,
        marginLeft: 'auto',
        marginRight: 15,
        marginTop: 20,
      },
      skpiText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
      },
      bgImage: {
        flex: 1,
      },
      container: {
        marginTop: 190,
      },
      sendOTPTouch: {
        backgroundColor: colors.themeColor,
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
      line: {
        height: 1,
        width: 125,
        backgroundColor: 'white',
        marginVertical: 10,
        marginHorizontal: 10,
      },
      orText: {
        color: 'white',
      },
      mailIcon: {
        width: 30,
        height: 30,
        marginLeft: 20,
        marginTop: 10,
      },
      emailTouch: {
        backgroundColor: 'white',
        height: 50,
        marginHorizontal: 30,
        borderRadius: 10,
        marginTop: 10,
      },
      emailText: {
        color: 'black',
        fontSize: 18,
        marginLeft: 35,
    
        marginTop: 12,
      },
      facebookTouch: {
        backgroundColor: 'white',
        height: 50,
        marginHorizontal: 10,
        borderRadius: 5,
        marginTop: 10,
        borderRadius: 10,
      },
      googleTouch: {
        backgroundColor: 'white',
        height: 50,
        marginHorizontal: 5,
        borderRadius: 10,
        marginTop: 10,
      },
      facebokText: {
        color: 'black',
        fontSize: 15,
        marginLeft: 15,
    
        marginTop: 14,
        marginRight: 10,
      },
      googleText: {
        color: 'black',
        fontSize: 15,
        marginLeft: 15,
        marginRight: 20,
    
        marginTop: 14,
      },
      Tc: {
        color: 'white',
        textAlign: 'center',
        marginTop: 50,
      },
      last: {
        borderStyle: 'dashed',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginRight: 5,
        color: 'white',
      },
})
