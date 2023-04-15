import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import ConsumedFoodsCard from '../../../components/cards/ConsumedFoodsCard';
import BarChartCard from '../../../components/cards/BarChartCard';
import styles from './Results.style';

const Results = () => {
  const [consumedFoods, setConsumedFoods] = useState([]);

  useEffect(() => {
    const userId = auth().currentUser.uid;
    const ref = database().ref(`users/${userId}/MyProgram`);
    const consumedFoodsData = [];
    ref.on('value', snapshot => {
      const programs = snapshot.val() || {};
      const today = new Date();
      const lastWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
      const lastMonth = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
      Object.values(programs).forEach(program => {
        const eatDate = new Date(program.date);
        if (eatDate <= today) {
          if (eatDate >= lastWeek) {
            consumedFoodsData.push({
              ...program,
              period: 'weekly',
            });
          }
          if (eatDate >= lastMonth) {
            consumedFoodsData.push({
              ...program,
              period: 'monthly',
            });
          }
        }
      });
      setConsumedFoods(consumedFoodsData);
    });
  }, []);

  const weeklyConsumed = consumedFoods.reduce((acc, consumedFood) => {
    if (consumedFood.period === 'weekly') {
      for (const [key, value] of Object.entries(consumedFood.food.nutrients)) {
        if (!acc[key]) {
          acc[key] = value;
        } else {
          acc[key] += value;
        }
      }
    }
    return acc;
  }, {});

  const monthlyConsumed = consumedFoods.reduce((acc, consumedFood) => {
    if (consumedFood.period === 'monthly') {
      for (const [key, value] of Object.entries(consumedFood.food.nutrients)) {
        if (!acc[key]) {
          acc[key] = value;
        } else {
          acc[key] += value;
        }
      }
    }
    return acc;
  }, {});

  const weeklyData = {
    labels: ['Energy(kcal)', 'Fat', 'Carbohydrate', 'Fiber', 'Protein'],
    datasets: [
      {
        data: [
          weeklyConsumed.ENERC_KCAL,
          weeklyConsumed.FAT,
          weeklyConsumed.CHOCDF,
          weeklyConsumed.FIBTG,
          weeklyConsumed.PROCNT,
        ],
      },
    ],
  };

  const monthlyData = {
    labels: ['Energy(kcal)', 'Fat', 'Carbohydrate', 'Fiber', 'Protein'],
    datasets: [
      {
        data: [
          monthlyConsumed.ENERC_KCAL,
          monthlyConsumed.FAT,
          monthlyConsumed.CHOCDF,
          monthlyConsumed.FIBTG,
          monthlyConsumed.PROCNT,
        ],
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.charts_container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View>
            <Text style={styles.charts_title}>Weekly Chart</Text>
            <BarChartCard data={weeklyData} />
          </View>
          <View>
            <Text style={styles.charts_title}>Monthly Chart</Text>
            <BarChartCard data={monthlyData} />
          </View>
        </ScrollView>
      </View>
      <ScrollView style={styles.consumed_container}>
        <Text style={styles.consumed_title}>Consumed Foods</Text>
        {consumedFoods.map((food, index) => (
          <ConsumedFoodsCard key={index} food={food} />
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default Results;
