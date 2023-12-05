import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from "tailwind-react-native-classnames";
import Ionicons from '@expo/vector-icons/Ionicons';
import StartEngineScreen from './StartEngineScreen';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler';

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}
            screenOptions={{ headerShown: false }}>
            <View style={tw`p-5 right-20 top-5`}>
                <Text style={tw`text-gray-400 left-36 `}>Tesla</Text>
                <Image
                    style={{
                        width: 170,
                        height: 170,
                        bottom: 45,
                        left: 80,
                        resizeMode: "contain",
                    }}
                    source={{
                        uri: "https://madsystems.com/wp-content/uploads/layerslider/Cybertruck/cybertruck-graph.png"
                    }}
                />
            </View>
            <View>
                <Image source={require('../assets/cybertruck.png')} style={{ height: 398, width: 549, left: 127 , bottom:34}} />
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
    );
};

export default HomeScreen;

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
});
