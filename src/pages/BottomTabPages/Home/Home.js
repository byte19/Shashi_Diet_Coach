import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList} from 'react-native';

import styles from './Home.style';
import fetchDietPrograms from '../../../utils/FetchDietPrograms';
import DietPlans from '../../../components/cards/DietPlansCard/DietPlansCard';

const Home = ({navigation}) => {
  const [dietPrograms, setDietPrograms] = useState([]);

  function handleCreate() {
    navigation.navigate('CreateDietProgram');
  }

  useEffect(() => {
    const getDietPrograms = async () => {
      const data = await fetchDietPrograms();
      if (data.length > 0) {
        setDietPrograms(data);
      } else {
        setDietPrograms([]);
      }
    };
    getDietPrograms();
  }, []);

  const renderDietPlans = ({item}) => (
    <DietPlans program={item} key={item.foodId} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>Home</Text>
      </View>
      <Text>Hello</Text>
      <Button title="Create" onPress={handleCreate} />
      <Text style={styles.plans_title}>Diet Plans</Text>
      <FlatList
        data={dietPrograms}
        renderItem={renderDietPlans}
        keyExtractor={item => item.foodId.toString()}
        numColumns={2}
      />
    </View>
  );
};

export default Home;
