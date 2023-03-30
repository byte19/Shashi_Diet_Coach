import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import styles from './Profile.style';
import CalculateUserInfo from '../../../components/Calculates/CalculateUserInfo';

const Profile = ({navigation}) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userId = auth().currentUser.uid;
    const dbRef = database().ref(`/users/${userId}`);
    dbRef.once('value').then(snapshot => {
      setUser(snapshot.val());
    });
  }, []);

  const activityLevels = {
    'Lightly Active': 1.375,
    'Moderately Active': 1.55,
    Active: 1.725,
    'Very Active': 1.9,
    Default: 1.375,
  };

  const activityLevel = user?.userInfo?.activity?.label
    ? activityLevels[user.userInfo.activity.label]
    : activityLevels.Default;

  const {bmi, maintenanceCalories, fatLossCalories} =
    user?.userInfo?.height && user?.userInfo?.weight && user?.userInfo?.age
      ? CalculateUserInfo({
          height: user.userInfo.height,
          weight: user.userInfo.weight,
          age: user.userInfo.age,
          activityLevel: activityLevel,
        })
      : {bmi: 0, maintenanceCalories: 0, fatLossCalories: 0};

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
          <Text style={styles.username}>{user ? user.username : ''}</Text>
          <Text style={styles.gender}>{user ? user.userInfo.gender : ''}</Text>
          <Text style={styles.activity_title}>Activity</Text>
          <Text style={styles.activity_text}>
            {user ? user.userInfo.activity.label : ''}
          </Text>
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
            <Text style={styles.info_text}>
              {user ? user.userInfo.height : ''}
            </Text>
          </View>
          <View style={styles.info_containers}>
            <Text style={styles.info_titles}>Weight</Text>
            <Text style={styles.info_text}>
              {user ? user.userInfo.weight : ''}
            </Text>
          </View>
          <View style={styles.info_containers}>
            <Text style={styles.info_titles}>Age</Text>
            <Text style={styles.info_text}>
              {user ? user.userInfo.age : ''}
            </Text>
          </View>
        </View>
        <View style={styles.calculates_container}>
          <View style={styles.bmi_calorieNeed_container}>
            <View style={styles.bmi_container}>
              <Text style={styles.calculates_title}>Body Mass Index</Text>
              <Text style={styles.calculates_text}>{bmi.toFixed(2)}</Text>
            </View>
            <View style={styles.calorieNeed_container}>
              <Text style={styles.calculates_title}>Daily Calorie Needs</Text>
              <Text style={styles.calculates_text}>
                {maintenanceCalories.toFixed(0)}
              </Text>
            </View>
          </View>
          <View style={styles.fatloss_container}>
            <Text style={styles.calculates_title}>Fat Loss Calorie</Text>
            <Text style={styles.calculates_text}>
              {fatLossCalories.toFixed(0)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
