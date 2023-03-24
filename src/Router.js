import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import FlashMessage from 'react-native-flash-message';

import Main from './pages/AuthPages/Main/Main';
import Login from './pages/AuthPages/Login/Login';
import Register from './pages/AuthPages/Register/Register';

import Home from './pages/BottomTabPages/Home/Home';
import MyPlan from './pages/BottomTabPages/MyPlan/MyPlan';
import Results from './pages/BottomTabPages/Results/Results';
import Profile from './pages/BottomTabPages/Profile/Profile';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function AuthPages() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

function BottomTabPages() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MyPlan" component={MyPlan} />
      <Tab.Screen name="Results" component={Results} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AuthPages" component={AuthPages} />
        <Stack.Screen name="BottomTabPages" component={BottomTabPages} />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default Router;
