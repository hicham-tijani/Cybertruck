import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image , } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import Pulse from 'react-native-pulse';
import { useState } from 'react';
import SelectableFlatlist from 'react-native-selectable-flatlist';




const Navigation = () => {
    

    

    return (
        
        <View style={styles.info}>
            <View style={styles.info2}>
                
            </View>
            

        </View>
    )
}

export default Navigation

const styles = StyleSheet.create({

    info: {
        height: "15%",
        width: "100%",
        bottom: 110,
        borderRadius:37,
        backgroundColor:"#002139",
        shadowOpacity: 1,
        shadowRadius: 9,
        shadowColor: '#014f86',

    },
    info2:{
        height: "4%",
        width: "14%",
        top: 8,
        left:165,
        borderRadius:"100%",
        backgroundColor:"#669bbc" 
    }
    

})