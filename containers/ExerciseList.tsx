import React from 'react';
import { SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import ExerciseItem from './ExerciseItem';
import exercises from '../assets/data/exercises';

interface State {
  exercises: Exercise[];
}

interface Exercise {
  title: string;
  id: number;
  tags: string[];
  image: any;
}

const ExerciseList = ({ chosenExercises }) => (
  <SafeAreaView>
    {exercises.map((exercise) => (
      <ExerciseItem
        key={exercise.id}
        chosenExercises={chosenExercises}
        exercise={exercise}
      />
    ))}
  </SafeAreaView>
);

const mapStateToProps = (state) => {
  const { workout } = state;

  return {
    chosenExercises: workout.chosenExercises,
  };
};

export default connect(mapStateToProps)(ExerciseList);
