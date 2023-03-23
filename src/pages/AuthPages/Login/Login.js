import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './Login.style';
import Button from '../../../components/Button/Button';

const Login = ({navigation}) => {
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
        <Text style={styles.header_text}>Login</Text>
      </View>
      <Image
        style={styles.logo}
        source={require('../../../assets/images/logo/Logo-horizontal.png')}
      />
      <View style={styles.input_container}>
        <TextInput style={styles.input} placeholder="E-mail" />
        <TextInput style={styles.input} placeholder="Password" />
      </View>
      <Button text="Login" theme="primary" style={styles.button} />
    </View>
  );
};

export default Login;
