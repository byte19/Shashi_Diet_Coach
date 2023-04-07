import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './MyBasket.style';

const MyBasket = ({navigation}) => {
  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View>
      <TouchableOpacity onPress={handleGoBack}>
        <FontAwesome name="angle-left" size={30} style={styles.goback_icon} />
      </TouchableOpacity>
      <Text>MyBasket</Text>
    </View>
  );
};

export default MyBasket;
