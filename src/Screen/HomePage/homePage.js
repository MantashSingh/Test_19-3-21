import React, { Component } from "react"
import { View, Text, Image, StyleSheet, FlatList } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

import LatestDealsCard from "../../Component/LatestDealsCard"
import navigationStrings from "../../constants/navigationStrings"
import imagePath from "../../assets/images/imagePath"



export default class LatestDeals extends Component {
    
    constructor(props) {
        super(props);
        this.state = {

            myData: [
                {
                    id: 0,

                    photo: imagePath.food1,
                    name: "Domino's Pizza",
                    line: "Pizza , Fast Food",
                    price1: 299,
                    price2: 359,
                    offer: "30% OFF",
                    quantity:1

                },
                {
                    id: 1,
                    photo: imagePath.food2,
                    name: "Domino's Pizza",
                    line: "Pizza , Fast Food",
                    price1: 299,
                    price2: 359,
                    offer: "30% OFF",
                    quantity:1
                },
                {
                    id: 2,
                    photo: imagePath.food3,
                    name: "Domino's Pizza",
                    line: "Pizza , Fast Food",
                    price1: 299,
                    price2: 359,
                    offer: "30% OFF",
                    quantity:1
                },
                {
                    id: 3,
                    photo: imagePath.food1,
                    name: "Domino's Pizza",
                    line: "Pizza , Fast Food",
                    price1: 299,
                    price2: 359,
                    offer: "30% OFF",
                    quantity:1
                },
                {
                    id: 4,
                    photo: imagePath.food2,
                    name: "Domino's Pizza",
                    line: "Pizza , Fast Food",
                    price1: 299,
                    price2: 359,
                    offer: "30% OFF",
                    quantity:1
                },
                {
                    id: 5,

                    photo: imagePath.food3,
                    name: "Domino's Pizza",
                    line: "Pizza , Fast Food",
                    price1: 299,
                    price2: 359,
                    offer: "30% OFF",
                    quantity:1

                },
                {
                    id: 6,
                    photo: imagePath.food1,
                    name: "Domino's Pizza",
                    line: "Pizza , Fast Food",
                    price1: 299,
                    price2: 359,
                    offer: "30% OFF",
                    quantity:1
                },
                {
                    id: 7,
                    photo: imagePath.food2,
                    name: "Domino's Pizza",
                    line: "Pizza , Fast Food",
                    price1: 299,
                    price2: 359,
                    offer: "30% OFF",
                    quantity:1
                },
                {
                    id: 8,
                    photo: imagePath.food3,
                    name: "Domino's Pizza",
                    line: "Pizza , Fast Food",
                    price1: 299,
                    price2: 359,
                    offer: "30% OFF",
                    quantity:1
                },
                {
                    id: 9,
                    photo: imagePath.food1,
                    name: "Domino's Pizza",
                    line: "Pizza , Fast Food",
                    price1: 299,
                    price2: 359,
                    offer: "30% OFF",
                    quantity:1
                },
                {
                    id: 10,
                    photo: imagePath.food,
                    name: "Domino's Pizza",
                    line: "Pizza , Fast Food",
                    price1: 299,
                    price2: 359,
                    offer: "30% OFF",
                    quantity:1
                },
            ],

            itemCount: 0,
            addTocartITem: []


        }
    }


    _onNextScrean = (id) => {
        //   console.log(id)
        const { navigation } = this.props
        const { myData } = this.state
        let newArray = [...myData]
        // alert(JSON.stringify(newArray[id]))
        navigation.navigate(navigationStrings.FOOD_DETAILS);
        // alert(selectItem)
    }


    buyNow = (id) => {
        let { itemCount, addTocartITem, myData } = this.state
        let newArray = [...myData];
        let index = newArray.findIndex((item) => item.id == id);
        if (!addTocartITem.includes(newArray[index])) {
            let finalArray = [...addTocartITem, newArray[index]];
            this.setState({
                itemCount: itemCount + 1,
                addTocartITem: finalArray
            })
        }
    }


    OpenFinalCart=(id)=>{
        const { navigation } = this.props
        const { myData ,addTocartITem ,itemCount} = this.state
        let newArray = [...myData]
        navigation.navigate(navigationStrings.FINAL_CART, { addTocartITem:addTocartITem , itemCount:itemCount });

    }

    componentDidMount() {
        const {navigation} = this.props;
        // let {addTocartITem}=this.this
        this.focusListener = this.props.navigation.addListener('focus', () => {
            // alert("sdcjhsdfc")
            if(this.props.route.params)
            {

                // alert("sdcjhsdfc")
                let test=this.props.route.params.addTocartITem
                this.buyNow(test.id)
                this.props.route.params=null
            }
        });
      }
    render() {
        const { navigation } = this.props;
        const { myData, buyNOw } = this.state;
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
                        <View style={styles.countAbsolute}><Text>{this.state.itemCount}</Text></View>
                        <Image style={styles.icon}
                            source={imagePath.cart}
                        />
                    </View>
                    </TouchableOpacity>
                </View>
              

                <Text style={styles.items}>xxxx Items</Text>


                <Image style={styles.footwareImg}
                    source={imagePath.footware}
                />


                <View>


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
            </View>

        )
    }
}

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