import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './Register.style';
import Button from '../../../components/Button/Button';

const Register = ({navigation}) => {
  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="angle-left"
          size={30}
          style={styles.goback_icon}
          onPress={handleGoBack}
        />
        <Text style={styles.header_text}>Register</Text>
      </View>
      <View style={styles.info_container}>
        <Image
          style={styles.logo}
          source={require('../../../assets/images/logo/Logo-horizontal.png')}
        />
        <View style={styles.input_container}>
          <TextInput style={styles.input} placeholder="Username" />
          <TextInput style={styles.input} placeholder="E-mail" />
          <TextInput style={styles.input} placeholder="Password" />
          <TextInput style={styles.input} placeholder="Repassword" />
        </View>
        <Button text="Register" theme="primary" style={styles.button} />
      </View>
    </View>
  );
};

export default Register;
