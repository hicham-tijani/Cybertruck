import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from "tailwind-react-native-classnames";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler';
import HomeScreen from './HomeScreen';
import { Linking } from "react-native";


const StartEngineScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}
            screenOptions={{ headerShown: false }}>
            <View style={tw`p-5 right-20 top-2`}>
            <Text style={tw`text-gray-400 left-36 top-11`}>TESLA</Text>
                <Image
                    style={{
                        width: 170,
                        height: 170,
                        top: -5,
                        left: 80,
                        resizeMode: "contain",
                    }}
                    source={{
                        uri: "https://madsystems.com/wp-content/uploads/layerslider/Cybertruck/cybertruck-graph.png"
                    }}
                />
                <TouchableOpacity style={styles.back} 
                onPress={() => { navigation.navigate("HomeScreen"); }}
                >
                <Image source={require('../assets/back.png')}  style={{ height: 35, width: 35, top:6, left:9}} /> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.info}
                  onPress={() => {
                    Linking.openURL("https://www.tesla.com/it_it/cybertruck");
                  }}
                >
                <Image source={require('../assets/tesla.png')}  style={{ height: 35, width: 35, top:8, left:9}} />  
                </TouchableOpacity>
            </View>
            <View>
                <Image source={require('../assets/cby.png')} style={{ height: 310, width: 355, left: 6, bottom:95}} />
            </View>

            <View style={tw`left-0 bottom-10`}>
                <Text style={tw`text-gray-400 text-lg bottom-3`}>A/C is Turned on</Text>
                <TouchableOpacity style={styles.button}
                onPress={() => { navigation.navigate("StartEngineScreen"); }}

                >
                 
                <Image source={require('../assets/print.png')} style={{ height: 45, width: 45}} />
                </TouchableOpacity>
                <Text style={tw`text-white top-4 left-2`}>Tap to open the car</Text>
            </View>

        </SafeAreaView>
  )
}

export default StartEngineScreen

const styles = StyleSheet.create({
  button: {
      width: 75,
      height: 75,
      left:28,
      shadowColor:"white",
      borderRadius: "100%",
      backgroundColor: '#0077b6',
      alignItems: 'center',
      justifyContent: 'center',
  },
  container: {
      flex: 1,
      backgroundColor: '#001426',
      alignItems: 'center',
      justifyContent: 'center',
    },
    back:{
        width:53,
        height:53,
        backgroundColor:"black",
        borderRadius:"100%",
        top:-195,
        left:-17,

    },

    info:{
      width:53,
      height:53,
      backgroundColor:"black",
      borderRadius:"100%",
      top:-250,
      right:-290, 
    }
});