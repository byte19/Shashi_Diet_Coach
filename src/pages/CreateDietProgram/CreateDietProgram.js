import React, {useState} from 'react';
import {Text, TextInput, View, TouchableOpacity, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './CreateDietProgram.style';
import fetchFoodData from '../../utils/FetchFoodData';
import FoodCard from '../../components/cards/FoodCard';
import HeaderCard from '../../components/cards/HeaderCard';

const CreateDietProgram = ({navigation}) => {
  const [food, setFood] = useState('');
  const [foodData, setFoodData] = useState(null);

  const handleSearch = async () => {
    const data = await fetchFoodData(food);
    console.log(data.hints[0].food);
    setFoodData(data);
  };

  function handleBasket() {
    navigation.navigate('MyBasket');
  }

  return (
    <View style={styles.container}>
      <HeaderCard text="Create Program" navigation={navigation} />
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
      <View style={styles.foodcard_container}>
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
