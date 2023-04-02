import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Dropdown} from 'react-native-element-dropdown';
import {showMessage} from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import styles from './UserInfo.style';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const UserInfo = ({navigation}) => {
  const [userInfo, setUserInfo] = useState({});
  const [selectedActivity, setSelectedActivity] = useState(null);

  const data = [
    {label: 'Lightly Active', value: '1'},
    {label: 'Moderately Active', value: '2'},
    {label: 'Active', value: '3'},
    {label: 'Very Active', value: '4'},
  ];

  function handleSave() {
    if (
      !userInfo.age ||
      !userInfo.height ||
      !userInfo.weight ||
      !userInfo.activity ||
      !userInfo.gender
    ) {
      showMessage({
        message: 'Please fill in all fields for best calculation!',
        type: 'danger',
        floating: true,
      });
    } else {
      const userId = auth().currentUser.uid;
      const dbRef = database().ref(`/users/${userId}/userInfo`);
      dbRef.set(userInfo);
      navigation.navigate('BottomTabPages');
    }
  }

  function handleClear() {
    setUserInfo({});
    setSelectedActivity(null);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.header_text}>User Info</Text>
      </View>
      <Text style={styles.top_text}>
        Please fill in your information! The information you give us will be
        used to calculate your Body Mass Index and Daily Calorie Needs and to
        recommend diet programs to you.
      </Text>
      <View style={styles.gender_container}>
        <View style={styles.gender_info_containers}>
          <CheckBox
            value={userInfo.gender === 'male'}
            onValueChange={newValue =>
              setUserInfo({...userInfo, gender: newValue ? 'male' : 'female'})
            }
            style={styles.checkbox}
          />
          <Text style={styles.gender_text}>Male</Text>
        </View>
        <View style={styles.gender_info_containers}>
          <CheckBox
            value={userInfo.gender === 'female'}
            onValueChange={newValue =>
              setUserInfo({...userInfo, gender: newValue ? 'female' : 'male'})
            }
            style={styles.checkbox}
          />
          <Text style={styles.gender_text}>Female</Text>
        </View>
      </View>
      <View style={styles.input_container}>
        <Input
          placeholder="Age"
          value={userInfo.age}
          style={styles.input}
          onChangeText={text => setUserInfo({...userInfo, age: text})}
        />
        <Input
          placeholder="Height (cm)"
          value={userInfo.height}
          style={styles.input}
          onChangeText={text => setUserInfo({...userInfo, height: text})}
        />
        <Input
          placeholder="Weight (kg)"
          value={userInfo.weight}
          style={styles.input}
          onChangeText={text => setUserInfo({...userInfo, weight: text})}
        />
      </View>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholder_style}
        selectedTextStyle={styles.selected_text_style}
        label="Activity"
        placeholder="Select activity"
        labelField="label"
        valueField="value"
        data={data}
        value={selectedActivity}
        onChange={item => {
          setUserInfo({...userInfo, activity: item});
          setSelectedActivity(item.value);
        }}
      />
      <View style={styles.button_container}>
        <Button
          text="Save"
          theme="primary"
          style={styles.buttons}
          onPress={handleSave}
        />
        <Button
          text="Clear"
          theme="secondary"
          style={styles.buttons}
          onPress={handleClear}
        />
      </View>
    </View>
  );
};

export default UserInfo;
