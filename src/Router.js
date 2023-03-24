import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import FlashMessage from 'react-native-flash-message';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import Main from './pages/AuthPages/Main/Main';
import Login from './pages/AuthPages/Login/Login';
import Register from './pages/AuthPages/Register/Register';

function AuthPages() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AuthPages" component={AuthPages} />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default Router;
