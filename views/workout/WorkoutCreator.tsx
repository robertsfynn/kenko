import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import ExerciseList from '../../containers/ExerciseList';
import Header from '../../components/Header';

export default class WorkoutCreator extends Component {
  render() {
    return (
      <View>
        <Header
          title="Add Exercises"
          subtitle="Workout creation"
          handlePress={() => console.log('NEXT')}
        />
        <ExerciseList />
      </View>
    );
  }
}
