import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import ExerciseList from '../../containers/ExerciseList';
import Header from '../../components/Header';
import { connect } from 'react-redux';

class WorkoutCreator extends Component {
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

function mapStateToProps(state) {
  const { workout } = state;
  return { chosenExercises: workout };
}

export default connect(mapStateToProps)(WorkoutCreator);
