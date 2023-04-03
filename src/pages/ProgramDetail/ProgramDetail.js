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
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon name="angle-left" size={30} style={styles.goback_icon} />
        </TouchableOpacity>
        <Text style={styles.header_text}>Program Details</Text>
      </View>
      <Image style={styles.image} source={getProgramImage(program)} />
      <Text style={styles.label}>{program.label}</Text>
      <Text style={styles.cate_cont_title}>Category</Text>
      <Text style={styles.category}>{program.category}</Text>
      <Text style={styles.cate_cont_title}>Contents</Text>
      <Text style={styles.foodContentsLabel}>{program.foodContentsLabel}</Text>
      <View style={styles.nutrients_container}>
        <Text style={styles.nutrients}>
          Energy / Calories : {program.nutrients.ENERC_KCAL}
        </Text>
        <Text style={styles.nutrients}>
          Carbohydrates : {program.nutrients.CHOCDF}
        </Text>
        <Text style={styles.nutrients}>Fat : {program.nutrients.FAT}</Text>
        <Text style={styles.nutrients}>Fiber : {program.nutrients.FIBTG}</Text>
        <Text style={styles.nutrients}>
          Protein : {program.nutrients.PROCNT}
        </Text>
      </View>
    </View>
  );
};

export default ProgramDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    padding: 10,
  },
  goback_icon: {
    fontSize: 40,
    marginRight: 20,
    color: colors.logoGreen,
  },
  header_text: {
    fontSize: 22,
    fontWeight: '400',
    color: colors.logoGreen,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
    marginTop: 10,
  },
  label: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cate_cont_title: {
    borderBottomWidth: 1,
    margin: 5,
    marginRight: 300,
    marginLeft: 7,
    padding: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  category: {
    marginLeft: 10,
  },
  foodContentsLabel: {
    marginLeft: 10,
  },
  nutrients_container: {
    margin: 10,
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 10,
    padding: 7,
  },
  nutrients: {
    margin: 3,
  },
});
