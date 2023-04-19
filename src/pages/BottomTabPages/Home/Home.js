import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './Home.style';
import fetchDietPrograms from '../../../utils/FetchDietPrograms';
import DietPlans from '../../../components/cards/DietPlansCard';
import CalculateUserInfo from '../../../utils/CalculateUserInfo';
import Loading from '../../../components/Loading/Loading';
import getProgramImage from '../../../utils/getProgramImage';

const Home = ({navigation}) => {
  const [user, setUser] = useState();
  const [dietPrograms, setDietPrograms] = useState([]);
  const [recommendedDiet, setRecommendedDiet] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = auth().currentUser.uid;
    const dbRef = database().ref(`/users/${userId}`);
    dbRef.once('value').then(snapshot => {
      setUser(snapshot.val());
    });
  }, []);

  useEffect(() => {
    const getDietPrograms = async () => {
      const data = await fetchDietPrograms();
      if (data.length > 0) {
        setDietPrograms(data);
        setLoading(false);
      } else {
        setDietPrograms([]);
      }
    };
    getDietPrograms();
  }, []);

  useEffect(() => {
    if (user && user.userInfo) {
      const {bmi, maintenanceCalories, fatLossCalories} =
        CalculateUserInfo.calculateInfo({
          height: user.userInfo.height,
          weight: user.userInfo.weight,
          age: user.userInfo.age,
          activityLevel: user.userInfo.activity
            ? user.userInfo.activity.label
            : undefined,
        });

      const diet = CalculateUserInfo.suggestDiet({
        bmi,
        maintenanceCalories,
        fatLossCalories,
      });
      setRecommendedDiet(diet);
    }
  }, [user]);

  if (loading) {
    return <Loading />;
  }

  const renderDietPlans = ({item}) => (
    <DietPlans program={item} key={item.foodId} navigation={navigation} />
  );

  function handleCreate() {
    navigation.navigate('CreateDietProgram');
  }

  // function handleRecommended() {
  //   const selectedProgram = dietPrograms.find(
  //     program => program.label === recommendedDiet,
  //   );
  //   if (selectedProgram) {
  //     navigation.navigate('ProgramDetail', {program: selectedProgram});
  //   }
  // }

  function handleRecommended() {
    if (recommendedDiet) {
      const selectedProgram = dietPrograms.find(
        program => program.label === recommendedDiet,
      );
      if (selectedProgram) {
        navigation.navigate('ProgramDetail', {program: selectedProgram});
      }
    }
  }

  // console.log(recommendedDiet);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>Home</Text>
      </View>
      <View style={styles.create_container}>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={handleCreate}>
          <Text style={styles.create_title}>
            Create your personal diet program!
          </Text>
          <Icon name="plus" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.plans_title}>Diet Programs</Text>
        <FlatList
          data={dietPrograms}
          renderItem={renderDietPlans}
          keyExtractor={item => item.foodId.toString()}
          numColumns={2}
        />
        <View>
          <Text style={styles.plans_title}>Recommended Diet Program</Text>
          <TouchableOpacity
            onPress={handleRecommended}
            style={styles.recommended_container}>
            <Image
              style={styles.recommended_image}
              source={getProgramImage(recommendedDiet)}
              resizeMode="cover"
            />
            <Text style={styles.recommended_diet}>{recommendedDiet}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;
