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
  state = {
    exercises: [
      {
        id: 1,
        title: 'Bench Press',
        image: require('assets/bodyparts/bench-press.png'),
        tags: ['Chest', 'Triceps', 'Deltoids'],
      },
      {
        id: 2,
        title: 'Pullups',
        image: require('assets/bodyparts/bench-press.png'),
        tags: ['Lats', 'Biceps'],
      },
      {
        id: 3,
        title: 'Squat',
        image: require('assets/bodyparts/bench-press.png'),
        tags: ['Quadriceps', 'Hamstrings'],
      },
      {
        id: 4,
        title: 'Deadlift',
        image: require('assets/bodyparts/bench-press.png'),
        tags: ['Hamstrings', 'Lower Back', 'Glutes', 'Other'],
      },
    ],
  };

  render() {
    return (
      <SafeAreaView>
        {this.state.exercises.map((exercise) => (
          <ExerciseItem key={exercise.id} exercise={exercise} />
        ))}
      </SafeAreaView>
    );
  }
}
