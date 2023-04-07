import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../../styles/colors';

const DietPlans = ({program, navigation}) => {
  function handleDietPress() {
    navigation.navigate('ProgramDetail', {program});
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleDietPress}>
      <View>
        <Text style={styles.label}>{program.label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DietPlans;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greenBlue,
    borderRadius: 10,
    margin: 7,
    padding: 5,
    height: 70,
    justifyContent: 'center',
  },
  label: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
