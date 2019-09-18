import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import ExerciseItem from '../ExerciseItem';

const fakeData = [
  {
    title: 'Bench Press',
    image: require('assets/bodyparts/bench-press.png'),
    tags: ['Chest', 'Triceps', 'Deltoids'],
  },
  {
    title: 'Pullups',
    image: require('assets/bodyparts/bench-press.png'),
    tags: ['Lats', 'Biceps'],
  },
  {
    title: 'Squat',
    image: require('assets/bodyparts/bench-press.png'),
    tags: ['Quadriceps', 'Hamstrings'],
  },
  {
    title: 'Deadlift',
    image: require('assets/bodyparts/bench-press.png'),
    tags: ['Hamstrings', 'Lower Back', 'Glutes', 'Other'],
  },
];

export default class ExerciseList extends Component {
  render() {
    return (
      <SafeAreaView>
        {fakeData.map((data) => (
          <ExerciseItem
            key={data.title}
            image={data.image}
            title={data.title}
            tags={data.tags}
          />
        ))}
      </SafeAreaView>
    );
  }
}
