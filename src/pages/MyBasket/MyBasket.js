import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './MyBasket.style';
import HeaderCard from '../../components/cards/HeaderCard';
import FoodCard from '../../components/cards/FoodCard';

const MyBasket = ({navigation, route}) => {
  const {selectedFoods} = route.params;

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <HeaderCard text="My Basket" navigation={navigation} />
      {selectedFoods.map((food, index) => (
        <FoodCard
          key={index}
          foodData={{hints: [{food: food}]}}
          iconName="remove"
          iconColor="red"
          handleAddToBasket={() => {}}
        />
      ))}
    </View>
  );
};

export default MyBasket;
