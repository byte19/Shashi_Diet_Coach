import React from 'react';
import {View, Text} from 'react-native';

import styles from './Home.style';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>Home</Text>
      </View>
    </View>
  );
};

export default Home;
