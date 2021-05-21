import React, { Component } from "react"
import { View, Text, Image, StyleSheet, FlatList } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

import LatestDealsCard from "../../Component/LatestDealsCard"
import navigationStrings from "../../constants/navigationStrings"
import imagePath from "../../constants/imagePath"

import store from '../../redux/store'
import types from "../../redux/types"
import { connect } from "react-redux"

import actions from "../../redux/actions"



class HomePage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {

            myData: [
                {
                    id: 0,
                    photo: imagePath.food1,
                    name: "Domino's 1",
                    line: "Pizza , Fast Food",
                    price1: 299,
                    price2: 359,
                    offer: "30% OFF",
                    quantity:0

                },
                {
                    id: 1,
                    photo: imagePath.food2,
                    name: "Domino's 2",
                    line: "Pizza , Fast Food",
                    price1: 299,
                    price2: 359,
                    offer: "30% OFF",
                    quantity:0
                },
                {
                    id: 2,
                    photo: imagePath.food3,
                    name: "Domino's 3",
                    line: "Pizza , Fast Food",
                    price1: 299,
                    price2: 359,
                    offer: "30% OFF",
                    quantity:0
                },
                {
                    id: 3,
                    photo: imagePath.food1,
                    name: "Domino's 4",
                    line: "Pizza , Fast Food",
                    price1: 299,
                    price2: 359,
                    offer: "30% OFF",
                    quantity:0
                },
                {
                    id: 4,
                    photo: imagePath.food2,
                    name: "Domino's 5",
                    line: "Pizza , Fast Food",
                    price1: 299,
                    price2: 359,
                    offer: "30% OFF",
                    quantity:0
                },
                {
                    id: 5,

                    photo: imagePath.food3,
                    name: "Domino's 6",
                    line: "Pizza , Fast Food",
                    price1: 299,
                    price2: 359,
                    offer: "30% OFF",
                    quantity:0

                },
                {
                    id: 6,
                    photo: imagePath.food1,
                    name: "Domino's 7",
                    line: "Pizza , Fast Food",
                    price1: 299,
                    price2: 359,
                    offer: "30% OFF",
                    quantity:0
                },
                {
                    id: 7,
                    photo: imagePath.food2,
                    name: "Domino's 8",
                    line: "Pizza , Fast Food",
                    price1: 299,
                    price2: 359,
                    offer: "30% OFF",
                    quantity:0
                },
                {
                    id: 8,
                    photo: imagePath.food3,
                    name: "Domino's 9",
                    line: "Pizza , Fast Food",
                    price1: 299,
                    price2: 359,
                    offer: "30% OFF",
                    quantity:0
                },
                {
                    id: 9,
                    photo: imagePath.food1,
                    name: "Domino's 10",
                    line: "Pizza , Fast Food",
                    price1: 299,
                    price2: 359,
                    offer: "30% OFF",
                    quantity:0
                },
                {
                    id: 10,
                    photo: imagePath.food2,
                    name: "Domino's 11",
                    line: "Pizza , Fast Food",
                    price1: 299,
                    price2: 359,
                    offer: "30% OFF",
                    quantity:0
                },
                {
                    id: 11,
                    photo: imagePath.food3,
                    name: "Domino's 12",
                    line: "Pizza , Fast Food",
                    price1: 299,
                    price2: 359,
                    offer: "30% OFF",
                    quantity:0
                },
            ],

            


        }
    }


    _onNextScrean = (id) => {
          console.log(id)
        
    }


    buyNow = (id) => {
        console.log(id)
        const {myData}=this.state;
        let newfoodItemAry=[...myData];
        let index=newfoodItemAry.findIndex((item)=>item.id===id)
       actions.addCart(newfoodItemAry , index)
    }


    OpenFinalCart=()=>{
        const { navigation } = this.props
        
        navigation.navigate(navigationStrings.FINAL_CART);

    }


    render() {
        const { navigation ,cartAry } = this.props;
        const { myData, buyNOw } = this.state;
        let len = cartAry.length;
        
        
        return (

            <View>
                <View style={styles.rowDirection}>
                    <Text style={styles.footware} >FOOD DEALS</Text>

                    <Image style={styles.icon}
                        source={imagePath.search}
                    />
                    <Image style={styles.icon}
                        source={imagePath.heart}
                    />
                    <TouchableOpacity  onPress={()=>this.OpenFinalCart()}>
                    <View style={styles.cartRelative}>
                        <View style={styles.countAbsolute}><Text>{len}</Text></View>
                        <Image style={styles.icon}
                            source={imagePath.cart}
                        />
                    </View>
                    </TouchableOpacity>
                </View>
              

                <Text style={styles.items}>xxxx Items</Text>


                


              


                    <View>

                        <FlatList
                            data={myData}
                            showsVerticalScrollIndicator={false}
                            numColumns={2}
                            keyExtractor={(item) => item.id}
                            ItemSeparatorComponent={() => <View style={{ marginBottom: 10 }} />}
                            renderItem={({ item }) => <LatestDealsCard data={item} _onNextScrean={this._onNextScrean} buyNow={this.buyNow} />}
                        />
                    </View>

                
            </View>

        )
    }
}
const mapStateToProps= state=>{
    return{
        cartAry: state.home.cartAry
    }
}

export default connect(mapStateToProps)(HomePage);





const styles = StyleSheet.create({
    rowDirection: {
        flexDirection: "row",
        marginTop: 10

    },
    icon: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    footware: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 30,
        marginRight: 100

    },
    items: {
        marginTop: -10,
        marginLeft: 45,
        color: "gray"

    },
    footwareImg: {
        width: 350,
        height: 50,
        marginTop: 20,
        marginLeft: 5
    },
    shoes: {
        width: 170,
        height: 200,
        marginRight: 8,
        marginLeft: 5
    },
    cartRelative: {
        position:"relative",

    },
    countAbsolute:{
        position:"absolute",
        left:15,
        top:2

    }


})


