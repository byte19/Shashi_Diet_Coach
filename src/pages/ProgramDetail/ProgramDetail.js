import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
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
      <View style={styles.category_container}>
        <Text style={styles.category_title}>Category =</Text>
        <Text style={styles.category}>{program.category}</Text>
      </View>
      <View style={styles.contents_container}>
        <Text style={styles.contents_title}>Contents =</Text>
        {program.foodContentsLabel ? (
          <Text style={styles.foodContentsLabel}>
            {program.foodContentsLabel}
          </Text>
        ) : (
          <Text> Undefined</Text>
        )}
      </View>
      <View style={styles.nutrients_container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Text style={styles.nutrients}>
            Energy / Calories : {program.nutrients.ENERC_KCAL.toFixed(2)}
          </Text>
          <Text style={styles.nutrients}>
            Carbohydrates : {program.nutrients.CHOCDF.toFixed(2)}
          </Text>
          <Text style={styles.nutrients}>
            Fat : {program.nutrients.FAT.toFixed(2)}
          </Text>
          <Text style={styles.nutrients}>
            Fiber : {program.nutrients.FIBTG.toFixed(2)}
          </Text>
          <Text style={styles.nutrients}>
            Protein : {program.nutrients.PROCNT.toFixed(2)}
          </Text>
        </ScrollView>
      </View>
      <TouchableOpacity>
        <Text style={styles.start_text}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProgramDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  category_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  category_title: {
    margin: 5,
    marginLeft: 5,
    padding: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  contents_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contents_title: {
    margin: 5,
    marginLeft: 5,
    padding: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  category: {
    marginLeft: 10,
  },
  foodContentsLabel: {
    marginLeft: 10,
    flex: 1,
  },
  nutrients_container: {
    margin: 10,
    marginTop: 20,
    elevation: 3,
    borderRadius: 10,
    padding: 10,
    paddingRight: 15,
    backgroundColor: colors.greenBlue,
    flexDirection: 'row',
  },
  nutrients: {
    margin: 10,
    fontSize: 17,
    fontWeight: 'bold',
  },
  start_text: {
    textAlign: 'center',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: colors.mattegreen,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
