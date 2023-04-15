import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ConsumedFoodsCard = ({food}) => {
  const formattedDate = new Date(food.date).toLocaleDateString();
  return (
    <View style={styles.container}>
      <Text>{food.food.label}</Text>
      <Text>
        {food.repast} - {formattedDate}
      </Text>
    </View>
  );
};

export default ConsumedFoodsCard;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    margin: 5,
    marginHorizontal: 0,
    paddingHorizontal: 5,
    paddingBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
