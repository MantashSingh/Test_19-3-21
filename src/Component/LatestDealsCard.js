import React from 'react';
import imagePath from '../assets/images/imagePath';



import {
    View,
    Text,
    StyleSheet,
    Image,
    Modal,
    TouchableOpacity,
    Alert,
    ScrollView,
} from 'react-native';
import navigationStrings from '../constants/navigationStrings';
// import {Dimensions } from "react-native";




function LatestDealsCard(props) {
    // const{screenWidth} = Dimensions.get('window').width;
    const { data, Test, item, selectfun, deselectFun, _onNextScrean , buyNow } = props;
    return (
        <View style={{flex:1}}>
            <TouchableOpacity onPress={() => _onNextScrean(data.id)} >
                <View style={styles.card}>
                    <Image
                        source={data.photo}
                        style={styles.photo}
                    />
                    <View style={styles.rowDirection}>
                        <Text style={styles.name}>{data.name}</Text>
                        <Image
                            source={imagePath.heart}
                            style={styles.heart}
                        />
                    </View>
                    <Text style={styles.line}>{data.line}</Text>
                    <View style={styles.rowDirection}>
                        <Text style={styles.price1}>
                            Rs.{data.price1}
                        </Text>
                        <Text style={styles.price2}>
                            Rs.{data.price2}
                        </Text>
                        <Text style={styles.offer}>
                            {data.offer}
                        </Text>
                    </View>

                </View>
            </TouchableOpacity>

            <View>
                <TouchableOpacity style={styles.buyNow} onPress={()=>buyNow(data.id)}>
                        <Text style={styles.buyText}>BUY NOW</Text>

                </TouchableOpacity>
            </View>

        </View>


    )

} export default LatestDealsCard;
const styles = StyleSheet.create({
    card: {
        marginLeft: 5,
        marginRight:5,
        flex:1
    },
    photo: {
        width: 180,
        height: 200,
        
    },
    heart: {
        width: 15,
        height: 15,
        marginLeft: "auto",
        marginRight: 15,
        marginTop: 5
    },
    name: {
        fontWeight: 'bold',

    },
    line: {
        fontSize: 15,
        color: "gray"
    },
    rowDirection: {
        flexDirection: 'row'
    },
    price2: {
        fontSize: 12,
        marginTop: 2,
        textDecorationLine: 'line-through',
        color: "gray",
        marginRight: 2,
        marginLeft: 2
    },
    offer: {
        color: 'red'
    },
    buyNow:{
        height:30,
      
        marginRight:15,
        marginLeft:5,
        borderRadius:30,
        backgroundColor:'#FF3F6D'

    },
    buyText:{
        color:'white',
        fontWeight:'bold',
        marginLeft:50,
        marginTop:5
    }
})