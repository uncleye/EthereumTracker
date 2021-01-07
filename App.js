import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './app/screens/HomeScreen'
import DetailScreen from './app/screens/DetailScreen'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        
      />
    </Stack.Navigator>
  );
}
//const AppContainer = createStackNavigator(AppNavigator);

export default class App extends React.Component{
  render() {
    return (    
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>);
  }
}

//const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={DetailScreen} />
//     </Tab.Navigator>
//   );
// }

// export default function App() {

//   return (
//     <NavigationContainer>
//       <MyTabs />
//     </NavigationContainer>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
