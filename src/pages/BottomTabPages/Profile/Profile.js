import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';

const Profile = () => {
  function handleLogout() {
    auth().signOut();
  }

  return (
    <View>
      <Text>Profile</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Icon name="logout" size={40} />
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
