import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './MyPlan.style';
import {Agenda} from 'react-native-calendars';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import Collapsible from 'react-native-collapsible';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';

import NutriensCard from '../../../components/cards/NutriensCard';

const MyPlan = () => {
  const [MyProgram, setMyProgram] = useState();
  const [isOpen, setIsOpen] = useState({});

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

  function toggleCollapsible(id) {
    setIsOpen({...isOpen, [id]: !isOpen[id]});
  }

  function removeFood() {
    const userId = auth().currentUser.uid;
    database().ref(`users/${userId}/MyProgram/`).remove();
  }

  return (
    <View style={styles.container}>
      <Agenda
        items={MyProgram}
        renderItem={item => (
          <View>
            <TouchableOpacity onPress={() => toggleCollapsible(item.id)}>
              <View style={styles.item_container}>
                <Image style={styles.image} source={{uri: item.food.image}} />
                <View style={styles.info_container}>
                  <Text style={styles.label}>{item.food.label}</Text>
                  <Text style={styles.repast}>{item.repast}</Text>
                  <Text style={styles.date}>
                    {item.date.split(' ')[1].slice(0, 5)}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <Icon
              name="remove"
              size={20}
              color="red"
              style={styles.remove_icon}
              onPress={() => removeFood(item.id)}
            />
            <Collapsible collapsed={!isOpen[item.id]}>
              <NutriensCard
                nutrients={item.food.nutrients}
                style={styles.nutrients}
              />
            </Collapsible>
          </View>
        )}
      />
    </View>
  );
};

export default MyPlan;
