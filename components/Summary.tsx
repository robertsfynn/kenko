import React from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { PurpleTags } from 'components/Tags';
import Button from './Button';

const Summary = ({ workout }) => {
  const storeWorkout = async () => {
    try {
      const currentWorkouts =
        JSON.parse(await AsyncStorage.getItem('workouts')) || [];
      console.log('CURRENT WORKOUTS');
      console.log(currentWorkouts);
      console.log('WORKOUT');
      console.log(workout);
      const updatedWorkouts = [...currentWorkouts, workout];
      console.log('UPDATED WORKOUT');
      console.log(updatedWorkouts);
      await AsyncStorage.setItem('workouts', JSON.stringify(updatedWorkouts));
    } catch (error) {
      // Error saving data
    }
  };
  console.log(workout.id);

  return (
    <View>
      <Button text="SAVE" onPress={storeWorkout} />
    </View>
  );
};

export default Summary;
