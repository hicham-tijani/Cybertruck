import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Button } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';
import { useState,useRef } from 'react';
import SwipeUpDownModal from 'react-native-swipe-modal-up-down';
import { Swipeable } from 'react-native-gesture-handler';


const Navigation = () => {
    const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  


return (

    <View style={styles.info} >
        <View style={styles.info2}>
        </View>

        <View style={styles.txt}>
            <Text style={tw`font-bold text-gray-300 text-xl ml-3`}>A/C is { active ? "ON" : "OFF"}</Text>
            <Text style={tw` font-semibold text-gray-500 text-sm mt-2 ml-2`}>Tap to turn ON or click the  {"\n"}
                to open setup
            </Text>

        </View>

<TouchableOpacity style={styles.menu}>
    <Text style={styles.text}>Menu</Text>
</TouchableOpacity>

        <TouchableOpacity style={styles.btn}
            onPress={handleClick}
        >
            <Image source={require('../assets/off.png')} style={{ height: 35, width: 35, top: 18, left: 18 }} />
        </TouchableOpacity>


    </View>  
)
}

export default Navigation

const styles = StyleSheet.create({

    info: {
        height: "16%",
        width: "100%",
        bottom: 110,
        borderRadius: 37,
        backgroundColor: "#002139",
        shadowOpacity: 1,
        shadowRadius: 4,
        shadowColor: '#014f86',

    },
    info2: {
        height: "4%",
        width: "14%",
        top: 8,
        left: 165,
        borderRadius: "100%",
        backgroundColor: "#669bbc"
    },
    btn: {
        width: 70,
        height: 70,
        backgroundColor: "#014f86",
        borderRadius: "100%",
        left: 310,
        top: -68,
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowColor: '#014f86',

    },
    txt: {
        top: 7,
        left: 22
    },
    menu:{
        height:14,
        width:47,
        backgroundColor: "#669bbc",
        bottom:30,
        left:213,
        borderRadius:25
    },
    text:{
        color:"#001426",
        marginLeft:4,
        bottom:1,
        fontWeight:"400"



    }

})