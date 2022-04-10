import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import SettingsScreen from './app/screens/SettingsScreen';
import UserScreen from './app/screens/UserScreen';
import WorkoutScreen from './app/screens/WorkoutScreen';
import PointsScreen from './app/screens/PointsScreen';
import HomeScreen from './app/screens/HomeScreen';
import HealthTrackScreen from './app/screens/HealthTrackScreen';
import WeightScreen from './app/screens/WeightScreen';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="HomeScreen">
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="UserScreen" component={UserScreen} />
        <Stack.Screen name="WorkoutScreen" component={WorkoutScreen} />
        <Stack.Screen name="PointsScreen" component={PointsScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="HealthTrackScreen" component={HealthTrackScreen} />
        <Stack.Screen name="WeightScreen" component={WeightScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// Happy Coding :)


