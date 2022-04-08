import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import SettingsScreen from './app/screens/SettingsScreen';
import UserScreen from './app/screens/UserScreen';
import WorkoutScreen from './app/screens/WorkoutScreen';
import PointsScreen from './app/screens/PointsScreen';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="PointsScreen">
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="UserScreen" component={UserScreen} />
        <Stack.Screen name="WorkoutScreen" component={WorkoutScreen} />
        <Stack.Screen name="PointsScreen" component={PointsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// Happy Coding :)


