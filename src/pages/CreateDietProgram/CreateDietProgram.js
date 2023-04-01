import React, {useState} from 'react';
import {Button, Text, TextInput, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './CreateDietProgram.style';
import fetchFoodData from '../../utils/FetchFoodData';

const CreateDietProgram = ({navigation}) => {
  const [food, setFood] = useState('');
  const [foodData, setFoodData] = useState(null);

  const handleSearch = async () => {
    const data = await fetchFoodData(food);
    setFoodData(data);
  };

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View>
      <TouchableOpacity onPress={handleGoBack}>
        <Icon name="angle-left" size={30} style={styles.goback_icon} />
      </TouchableOpacity>
      <TextInput
        value={food}
        onChangeText={setFood}
        placeholder="Enter food name"
      />
      <Button title="Search" onPress={handleSearch} />
      {foodData && (
        <View>
          <Text>{foodData.hints[0].food.label}</Text>
          <Text>{foodData.hints[0].food.nutrients.ENERC_KCAL}</Text>
        </View>
      )}
    </View>
  );
};

export default CreateDietProgram;
