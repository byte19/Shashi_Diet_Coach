import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';

const Profile = ({navigation}) => {
  function handleLogout() {
    auth().signOut();
  }

  function handleEditProfile() {
    navigation.navigate('UserInfo');
  }

  return (
    <View>
      <Text>Profile</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Icon name="logout" size={40} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleEditProfile}>
        <Icon name="account" size={40} />
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
