import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, FlatList , Button} from 'react-native';
import React from 'react';
import tw from "tailwind-react-native-classnames";
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import HomeScreen from './HomeScreen';
import { Linking } from "react-native";
import Information from '../components/Information';
import Navigation from '../components/Navigation';
import { useState,useRef } from 'react';
import GeolocationScreen from './GeolocationScreen';


const StartEngineScreen = () => {
  const navigation = useNavigation();
  

  return (
    <SafeAreaView style={styles.container}
      screenOptions={{ headerShown: false }}>
      <View style={tw`p-5 right-20 top-40`}>

      <Image source={require('../assets/Teslalogo.png')} style={{ height: 18, width: 59, left: 133 , top:24}} />
        <Image
          style={{
            width: 170,
            height: 170,
            top: -21,
            left: 80,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://madsystems.com/wp-content/uploads/layerslider/Cybertruck/cybertruck-graph.png"
          }}
        />
        <TouchableOpacity style={styles.back}
          onPress={() => { navigation.navigate("GeolocationScreen"); }}
        >
         <Image source={require('../assets/position.png')} style={{ height: 28, width: 28, top: 10, left: 12 }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.info}
          onPress={() => {
            Linking.openURL("https://www.tesla.com/it_it/cybertruck");
          }}
        >
          <Image source={require('../assets/tesla.png')} style={{ height: 35, width: 35, top: 8, left: 9 }} />
        </TouchableOpacity>
      </View>
      <View>
        <Image source={require('../assets/cybertruck2.0.png')} style={{ height: 350, width: 365, left: -15, bottom: 85 }} />
        
      </View>

      <View style={tw` h-1/6 right-32 bottom-28 `}>
      <View style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
      <Text style={tw`font-semibold text-white mr-8 ml-72`}>
      <Image source={require('../assets/battery.png')} style={{ height:18, width: 18}} />54%</Text>
      <Text style={tw`font-semibold text-white mr-8`}><Image source={require('../assets/range.png')} style={{ height:18, width: 18}} />297 Km</Text>
      <Text style={tw`font-semibold text-lg text-gray-400 bottom-8 right-44`}>Status</Text>
      <Text style={tw`font-semibold text-white right-12`}><Image source={require('../assets/Temp.png')} style={{ height:18, width: 18}} />27 °C</Text>
      </View>
 
      </View>

      <Information/>
    <Navigation/>  
    
    </SafeAreaView>
  )
}

export default StartEngineScreen

const styles = StyleSheet.create({
  button: {
    width: 75,
    height: 75,
    left: 28,
    shadowColor: "white",
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
  back: {
    width: 53,
    height: 53,
    backgroundColor: "#001426",
    borderRadius: "100%",
    top: -188,
    left: -17,
    shadowOpacity: 1,
    shadowRadius: 3,
    shadowColor: '#014f86',

  },

  info: {
    width: 53,
    height: 53,
    backgroundColor: "#001426",
    borderRadius: "100%",
    top: -240,
    right: -290,
    shadowOpacity: 1,
    shadowRadius: 3,
    shadowColor: '#014f86',

  }
});