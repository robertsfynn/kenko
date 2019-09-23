import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import ExerciseItem from './ExerciseItem';

interface State {
  exercises: Exercise[];
}

interface Exercise {
  title: string;
  id: number;
  tags: string[];
  image: any;
}

export default class ExerciseList extends Component<{}, State> {
  render() {
    return (
      <SafeAreaView>
        {this.props.exercises.map((exercise) => (
          <ExerciseItem
            key={exercise.id}
            exercise={exercise}
            addExercise={this.props.addExercise}
            removeExercise={this.props.removeExercise}
          />
        ))}
      </SafeAreaView>
    );
  }
}
