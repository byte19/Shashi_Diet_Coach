import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {BarChart} from 'react-native-chart-kit';

import ConsumedFoodsCard from '../../../components/cards/ConsumedFoodsCard';
import styles from './Results.style';

const Results = () => {
  const [consumedFoods, setConsumedFoods] = useState([]);

  useEffect(() => {
    const userId = auth().currentUser.uid;
    const ref = database().ref(`users/${userId}/MyProgram`);
    const consumedFoodsData = [];
    ref.on('value', snapshot => {
      const programs = snapshot.val() || {};
      Object.values(programs).forEach(program => {
        const today = new Date();
        const eatDate = new Date(program.date);
        if (eatDate < today) {
          consumedFoodsData.push(program);
        }
      });
      // console.log(consumedFoodsData);
      setConsumedFoods(consumedFoodsData);
    });
    return () => ref.off();
  }, []);

  // console.log(consumedFoods);

  const totals = consumedFoods.reduce((acc, consumedFood) => {
    for (const [key, value] of Object.entries(consumedFood.food.nutrients)) {
      if (!acc[key]) {
        acc[key] = value;
      } else {
        acc[key] += value;
      }
    }
    return acc;
  }, {});

  // console.log(totals);

  const chartData = {
    labels: ['ENERC_KCAL', 'FAT', 'CHOCDF', 'FIBTG', 'PROCNT'],
    datasets: [
      {
        data: [
          totals.ENERC_KCAL,
          totals.FAT,
          totals.CHOCDF,
          totals.FIBTG,
          totals.PROCNT,
        ],
      },
    ],
  };

  const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  };

  const chartStyle = {
    marginVertical: 8,
    borderRadius: 10,
    margin: 10,
  };

  return (
    <View style={styles.container}>
      <View style={styles.weekly_chart_container}>
        <BarChart
          data={chartData}
          width={370}
          height={270}
          chartConfig={chartConfig}
          style={chartStyle}
        />
      </View>
      <View style={styles.consumed_container}>
        <Text style={styles.consumed_title}>Consumed Foods</Text>
        {consumedFoods.map((food, index) => (
          <ConsumedFoodsCard key={index} food={food} />
        ))}
      </View>
    </View>
  );
};

export default Results;
