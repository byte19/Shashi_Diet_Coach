import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../../styles/colors';
import getProgramImage from '../../utils/getProgramImage';

const ProgramDetail = ({navigation, route}) => {
  const {program} = route.params;

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View>
      <TouchableOpacity onPress={handleGoBack}>
        <Icon name="angle-left" size={30} style={styles.goback_icon} />
      </TouchableOpacity>
      <Text>ProgramDetail</Text>
      <Image style={styles.image} source={getProgramImage(program)} />
      <Text>{program.label}</Text>
      <Text>{program.category}</Text>
      <Text>{program.foodContentsLabel}</Text>
      <Text>Energy - Calories : {program.nutrients.ENERC_KCAL}</Text>
      <Text>Carbohydrates : {program.nutrients.CHOCDF}</Text>
      <Text>Fat : {program.nutrients.FAT}</Text>
      <Text>Fiber : {program.nutrients.FIBTG}</Text>
      <Text>Protein : {program.nutrients.PROCNT}</Text>
    </View>
  );
};

export default ProgramDetail;

const styles = StyleSheet.create({
  goback_icon: {
    fontSize: 40,
    color: colors.logoGreen,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
});
