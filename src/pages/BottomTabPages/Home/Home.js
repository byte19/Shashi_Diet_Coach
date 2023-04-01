import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';

import styles from './Home.style';
import fetchDietPrograms from '../../../utils/FetchDietPrograms';

const Home = ({navigation}) => {
  const [dietPrograms, setDietPrograms] = useState([]);

  function handleCreate() {
    navigation.navigate('CreateDietProgram');
  }

  useEffect(() => {
    const getDietPrograms = async () => {
      const data = await fetchDietPrograms();
      if (data.length > 0) {
        console.log(JSON.stringify(data, null, 2));
        setDietPrograms(data);
      } else {
        setDietPrograms([]);
      }
    };

    getDietPrograms();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>Home</Text>
      </View>
      <Text>Hello</Text>
      <Button title="Create" onPress={handleCreate} />
      {dietPrograms.map(program => (
        <Text key={program.foodId}>{program.label}</Text>
      ))}
    </View>
  );
};

export default Home;
