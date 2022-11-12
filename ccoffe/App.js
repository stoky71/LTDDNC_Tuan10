import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screen01 from './components/defaultt'
import Screen02 from './components/home' 
import Screen03 from './components/cart'
const Stack = createNativeStackNavigator()

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Screen01}/>
        <Stack.Screen name="Star" component={Screen02}/>
        <Stack.Screen name="Cart" component={Screen03}/>
      </Stack.Navigator>
    </NavigationContainer>  
  );
}

