import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../../styles/colors';

const ProgramDetail = ({navigation}) => {
  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View>
      <TouchableOpacity onPress={handleGoBack}>
        <Icon name="angle-left" size={30} style={styles.goback_icon} />
      </TouchableOpacity>
      <Text>ProgramDetail</Text>
    </View>
  );
};

export default ProgramDetail;

const styles = StyleSheet.create({
  goback_icon: {
    fontSize: 40,
    color: colors.logoGreen,
  },
});
