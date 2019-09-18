import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import ExerciseItem from './ExerciseItem';

interface State {
  exercises: Exercise[];
  chosenExercises: Exercise[];
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
    chosenExercises: [],
  };

  addExercise = (exercise) => {
    this.setState((prevState) => ({
      chosenExercises: [...prevState.chosenExercises, exercise],
    }));
  };

  removeExercise = (exercise) => {
    this.setState((prevState) => ({
      chosenExercises: prevState.chosenExercises.filter(
        (el: Exercise) => el.id != exercise.id,
      ),
    }));
  };

  render() {
    return (
      <SafeAreaView>
        {this.state.exercises.map((exercise) => (
          <ExerciseItem
            key={exercise.id}
            exercise={exercise}
            addExercise={this.addExercise.bind(this)}
            removeExercise={this.removeExercise.bind(this)}
          />
        ))}
      </SafeAreaView>
    );
  }
}
