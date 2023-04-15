import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {BarChart, PieChart} from 'react-native-chart-kit';

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

  const chartDataPie = [
    {
      name: 'Energy(kcal)',
      value: totals.ENERC_KCAL,
      color: '#F7464A',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Fat',
      value: totals.FAT,
      color: '#46BFBD',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Carbohydrate',
      value: totals.CHOCDF,
      color: '#FDB45C',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Fiber',
      value: totals.FIBTG,
      color: '#949FB1',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Protein',
      value: totals.PROCNT,
      color: '#4D5360',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

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
      <View style={styles.monthly_chart_container}>
        <Text>aa</Text>
        <PieChart
          data={chartDataPie}
          width={370}
          height={200}
          chartConfig={chartConfig}
          accessor={'value'}
          backgroundColor="transparent"
          paddingLeft="15"
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
