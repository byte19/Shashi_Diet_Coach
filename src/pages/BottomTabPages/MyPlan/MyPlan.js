import React from 'react';
import {View, Text} from 'react-native';
import styles from './MyPlan.style';
import {Agenda} from 'react-native-calendars';

const MyPlan = () => {
  const myPlans = {
    '2023-04-07': [
      {name: 'Breakfast', time: '10:00', content: 'elma, armut, şeftali'},
      {name: 'Ogle', time: '10:00', content: 'elma, armut, şeftali'},
      {name: 'Dinner', time: '10:00', content: 'elma, armut, şeftali'},
    ],
    '2023-04-08': [
      {name: 'Etkinlik 3', time: '11:00'},
      {name: 'Etkinlik 4', time: '15:00'},
    ],
    '2023-04-09': [
      {name: 'Etkinlik 5', time: '12:00'},
      {name: 'Etkinlik 6', time: '16:00'},
    ],
  };

  return (
    <View style={styles.container}>
      <Agenda
        items={myPlans}
        renderItem={item => (
          <View style={styles.item}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text>{item.time}</Text>
            <Text style={styles.content}>{item.content}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default MyPlan;
