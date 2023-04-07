import React, {useState} from 'react';
import {Text, TextInput, View, TouchableOpacity, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './CreateDietProgram.style';
import fetchFoodData from '../../utils/FetchFoodData';
import FoodCard from '../../components/cards/FoodCard/FoodCard';

const CreateDietProgram = ({navigation}) => {
  const [food, setFood] = useState('');
  const [foodData, setFoodData] = useState(null);

  const handleSearch = async () => {
    const data = await fetchFoodData(food);
    console.log(data.hints[0].food);
    setFoodData(data);
  };

  function handleGoBack() {
    navigation.goBack();
  }

  function handleBasket() {
    navigation.navigate('MyBasket');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <FontAwesome name="angle-left" size={30} style={styles.goback_icon} />
        </TouchableOpacity>
        <Text style={styles.header_text}>Create Program</Text>
      </View>
      <View style={styles.input_container}>
        <TextInput
          style={styles.input}
          value={food}
          onChangeText={setFood}
          placeholder="Enter food name"
        />
        <TouchableOpacity onPress={handleSearch}>
          <FontAwesome name="search" size={25} style={styles.search_icon} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        {foodData && <FoodCard foodData={foodData} />}
      </View>
      <View style={styles.basket_container}>
        <View style={styles.counter_container}>
          <Text style={styles.counter}>3</Text>
        </View>
        <TouchableOpacity onPress={handleBasket}>
          <MaterialCommunityIcons
            name="cart-outline"
            size={50}
            style={styles.basket_icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateDietProgram;
