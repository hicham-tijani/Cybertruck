import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image , } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import Pulse from 'react-native-pulse';
import { useState } from 'react';
import SelectableFlatlist from 'react-native-selectable-flatlist';
import Navigation from './Navigation';


const data = [
    {
        id:"123",
        title: "Engine",
        subtitle: "Sleeping Mode",
        image: "https://i0.wp.com/whateverbrightthings.com/wp-content/uploads/2020/05/Dot-Icon-Blue.png?ssl=1",
        selected:false
    },
    {
        id:"125",
        title: "Climate",
        subtitle: "A/C is ON",
        image: "https://i0.wp.com/whateverbrightthings.com/wp-content/uploads/2020/05/Dot-Icon-Blue.png?ssl=1",
        selected:false
    },
    {
        id:"326",
        title: "Tires",
        subtitle: "Low pressure",
        image: "https://i0.wp.com/whateverbrightthings.com/wp-content/uploads/2020/05/Dot-Icon-Blue.png?ssl=1",
        selected:false
    },
    
];

const Information = () => {
    const [shouldShow, setshouldShow] = useState(false);
    const [select, setSelect] = useState(data)
    
    const handleOnpress = (item) =>{
        const newItem = select.map((val)=>{
            if(val.id===item.id){
                return {...val,selected:!val.selected}
            }
            else{
                return val;
            }
        })
        setSelect(newItem)
    }
    
    

    return (
        <View style={styles.info}>
            <Text style={tw`text-xl font-semibold text-gray-400 mb-2`}>Information</Text>
            <FlatList
                horizontal
                data={select}
                style={styles.flt}
                keyExtractor={(item) => item.id}
                renderItem={({ item: { title, subtitle, image, id }, item }) => (
                    <TouchableOpacity style={styles.button}
                        onPress={() => handleOnpress(item)}
                    >
                        <View>
                            {
                                item.selected ? (
                                    <Image
                                        style={styles.dot}
                                        source={{ uri: image }}

                                    />
                                ) : null
                            }

                            <Text style={tw`text-xl font-semibold text-white mt-8 mr-6`}>{title}</Text>
                            <Text style={tw` font-semibold text-gray-400 mt-1`}>{subtitle}</Text>
                        </View>
                    </TouchableOpacity>

                )}
            />
            <Text style={tw`text-xl font-semibold text-gray-400 absolute top-44 right-28`}>Navigation</Text>
        </View>
    )
}

export default Information

const styles = StyleSheet.create({

    info: {
        height: "20%",
        width: 200,
        bottom: 194,
        right: 62

    },
    flt: {
        width: 400,
        height: 420,
        right:10
    },
    button: {
        height: 100,
        width: 138,
        marginRight: 18,
        backgroundColor: "#002139",
        alignContent: "center",
        alignItems: "center",
        borderRadius: 20,
    },
    dot: {
        width: 12,
        height: 12,
        position: "absolute",
        bottom: 55,
        left: "59%",
        resizeMode: 'contain',
    },
  

})