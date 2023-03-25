import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import FlashMessage from 'react-native-flash-message';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';

import Main from './pages/AuthPages/Main/Main';
import Login from './pages/AuthPages/Login/Login';
import Register from './pages/AuthPages/Register/Register';

import UserInfo from './pages/UserInfo/UserInfo';

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
    <Tab.Navigator screenOptions={tabBarOptions}>
      <Tab.Screen name="Home" component={Home} options={HomeOptions} />
      <Tab.Screen name="MyPlan" component={MyPlan} options={MyPlanOptions} />
      <Tab.Screen name="Results" component={Results} options={ResultsOptions} />
      <Tab.Screen name="Profile" component={Profile} options={ProfileOptions} />
    </Tab.Navigator>
  );
}

const Router = () => {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(user);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!userSession ? (
          <Stack.Screen name="AuthPages" component={AuthPages} />
        ) : (
          <Stack.Screen name="UserInfo" component={UserInfo} />
        )}
        <Stack.Screen name="BottomTabPages" component={BottomTabPages} />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

const tabBarOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    position: 'absolute',
    margin: 15,
    marginBottom: 20,
    borderRadius: 15,
    elevation: 3,
  },
};

const HomeOptions = () => ({
  tabBarIcon: ({focused}) => (
    <MaterialIcon name="home" size={35} color={focused ? '#008037' : 'gray'} />
  ),
});
const MyPlanOptions = () => ({
  tabBarIcon: ({focused}) => (
    <MaterialIcon
      name="sign-direction"
      size={35}
      color={focused ? '#008037' : 'gray'}
    />
  ),
});
const ResultsOptions = () => ({
  tabBarIcon: ({focused}) => (
    <MaterialIcon
      name="finance"
      size={35}
      color={focused ? '#008037' : 'gray'}
    />
  ),
});
const ProfileOptions = () => ({
  tabBarIcon: ({focused}) => (
    <MaterialIcon
      name="account"
      size={35}
      color={focused ? '#008037' : 'gray'}
    />
  ),
});

export default Router;
