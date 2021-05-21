import React, {Component} from 'react';
import {Text, StyleSheet, View , FlatList} from 'react-native';
import actions from "../../redux/actions";
import { showMessage, hideMessage } from "react-native-flash-message";
import GoOutCard from '../../Component/GoOutCard';


export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userArray:[],
        incressSkip:0
        
    };
  }

  componentDidMount(){
    this.hitApiForUserData()
  }
  hitApiForUserData=()=>{
    const{userArray , incressSkip} = this.state
    actions.UserData({
      searchType:"LEADERBOARD",
       limit:"5" ,
       skip:incressSkip

    })
    .then(response => {
               
     
      
      this.setState({
        userArray:[...userArray , ...response.data],
        incressSkip: incressSkip+5
      })
      
      
      
      showMessage({
          type:"success",
          message:"loading...... "
      })
      
      
}).catch((error) => {
  
  showMessage({
      type:"danger",
      message:"Login failed "
  })
  
      console.log(error)
})
  }



  render() {
    const{userArray} = this.state
    return (
      <View>
        {/* <Text onPress={this.hitApiForUserData}> hit</Text> */}

        <FlatList
                            data={userArray}
                            showsVerticalScrollIndicator={false}
                            numColumns={1}
                            keyExtractor={(item) => item._id}
                            ItemSeparatorComponent={() => <View style={{ marginBottom: 200 }} />}
                            renderItem={({ item }) =><GoOutCard data={item}/>}
                            onEndReached={this.hitApiForUserData}
                            onEndReachedThreshold={1}
                        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
