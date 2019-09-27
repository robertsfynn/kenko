import React from 'react';
import { SafeAreaView, Text, AsyncStorage } from 'react-native';
import styled from 'styled-components/native';
import { PurpleTags } from 'components/Tags';
import { connect } from 'react-redux';
import Button from './Button';
import { handleTitleChange } from '../store/actions/workout';

const Input = styled.TextInput``;

const Summary = ({ workout, handleTitleChange }) => {
  const storeWorkout = async () => {
    try {
      const currentWorkouts =
        JSON.parse(await AsyncStorage.getItem('workouts')) || [];
      const updatedWorkouts = [...currentWorkouts, workout];
      await AsyncStorage.setItem('workouts', JSON.stringify(updatedWorkouts));
    } catch (error) {
      // Error saving data
    }
  };

  return (
    <SafeAreaView>
      <Input
        value={workout.title}
        onChangeText={(text) => handleTitleChange(text)}
        placeholder="Title"
      />
      <Button text="SAVE" onPress={storeWorkout} />
    </SafeAreaView>
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleTitleChange: (text) => dispatch(handleTitleChange(text)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Summary);
