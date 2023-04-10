import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './MyPlan.style';
import {Agenda} from 'react-native-calendars';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import _ from 'lodash';

const MyPlan = () => {
  const [MyProgram, setMyProgram] = useState({});

  useEffect(() => {
    const userId = auth().currentUser.uid;
    const ref = database().ref(`users/${userId}/MyProgram`);
    ref.on('value', snapshot => {
      const programs = snapshot.val() || {};
      const groupedPrograms = _.groupBy(
        programs,
        program => program.date.split(' ')[0],
      );
      setMyProgram(groupedPrograms);
    });

    return () => ref.off();
  }, []);

  return (
    <View style={styles.container}>
      <Agenda
        items={MyProgram}
        renderItem={item => (
          <View style={styles.item}>
            <Image style={styles.image} source={{uri: item.food.image}} />
            <Text style={styles.itemName}>{item.repast}</Text>
            <Text>{item.date}</Text>
            <Text style={styles.content}>{item.food.label}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default MyPlan;
