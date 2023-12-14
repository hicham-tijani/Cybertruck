import React from 'react';
import { StyleSheet,View} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import 'react-native-gesture-handler'
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StartEngineScreen from './screens/StartEngineScreen';


export default function App() {
  const Stack = createStackNavigator();

  return (
      <NavigationContainer >
        <Stack.Navigator>
      <Stack.Screen 
      name="HomeScreen"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
      />
      <Stack.Screen 
      name="StartEngineScreen"
      component={StartEngineScreen}
      options={{
        headerShown: false,
      }}
      />
    </Stack.Navigator>
      </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001426',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
