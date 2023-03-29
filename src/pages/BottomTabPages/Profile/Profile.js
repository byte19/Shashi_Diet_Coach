import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';

import styles from './Profile.style';

const Profile = ({navigation}) => {
  function handleLogout() {
    auth().signOut();
  }

  function handleEditProfile() {
    navigation.navigate('EditUserInfo');
  }

  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <TouchableOpacity>
          <Image
            source={require('../../../assets/images/defaultProfile.png')}
            style={styles.profile_image}
          />
        </TouchableOpacity>
        <View style={styles.top_user_info_container}>
          <Text style={styles.username}>Abdullah</Text>
          <Text style={styles.gender}>Male</Text>
          <Text style={styles.activity_title}>Activity</Text>
          <Text style={styles.activity_text}>Very Active</Text>
        </View>
        <View style={styles.icon_container}>
          <TouchableOpacity onPress={handleEditProfile}>
            <Icon name="account" size={30} color="#363636" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout}>
            <Icon name="logout" size={30} color="#363636" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottom_container}>
        <View style={styles.bottom_top_container}>
          <View style={styles.info_containers}>
            <Text style={styles.info_titles}>Height</Text>
            <Text style={styles.info_text}>185</Text>
          </View>
          <View style={styles.info_containers}>
            <Text style={styles.info_titles}>Weight</Text>
            <Text style={styles.info_text}>70</Text>
          </View>
          <View style={styles.info_containers}>
            <Text style={styles.info_titles}>Age</Text>
            <Text style={styles.info_text}>18</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
