import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import SetItem from './SetItem';

const SetList = ({ chosenExercises }) => (
  <View style={{ paddingHorizontal: 20 }}>
    {chosenExercises.map((exercise) => (
      <SetItem
        title={exercise.title}
        key={exercise.id}
        exerciseID={exercise.id}
        image={exercise.image}
        sets={exercise.sets}
      />
    ))}
  </View>
);

const mapStateToProps = (state) => {
  const { workout } = state;

  return { chosenExercises: workout.chosenExercises };
};

export default connect(mapStateToProps)(SetList);
