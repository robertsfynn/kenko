import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Tags } from '../components/Tags';
import { connect } from 'react-redux';
import { addExercise, removeExercise } from '../store/actions';

const ItemContainer = styled.View`
  align-items: center;
  flex-direction: row;
  margin: 0 20px;
  padding-bottom: 15px;
  padding-top: 10px;
  border-bottom-color: #dfdfe6;
  border-bottom-width: 1px;
`;

const ItemImage = styled.Image`
  width: 53px;
  height: 53px;
  margin-right: 20px;
`;

const ExerciseContainer = styled.View`
  flex: 1;
`;

const Checkbox = styled.View`
  width: 24px;
  height: 24px;
  border: ${(props) =>
    props.isPressed ? '2px solid #5063EE' : '2px solid #dfdfe6'};
  border-radius: 2px;

  background-color: ${(props) => (props.isPressed ? '#5063EE' : 'white')};
`;

const ExerciseTitle = styled.Text`
  font-family: Rubik-Medium;
  font-size: 18px;
  line-height: 22px;
  color: #23253a;
  margin-bottom: 5px;
`;

interface Exercise {
  title: string;
  id: number;
  tags: string[];
  image: any;
  sets: object[];
}

interface Props {
  exercise: Exercise;
  chosenExercises: Exercise[];
  addExercise: (Exercise) => object;
  removeExercise: (Exercise) => object;
}

interface State {
  isPressed: boolean;
}

class ExerciseItem extends React.Component<Props, State> {
  handlePress = (exercise: Exercise, isPressed: boolean) => {
    !isPressed
      ? this.props.addExercise(exercise)
      : this.props.removeExercise(exercise);
  };

  render() {
    const { exercise, chosenExercises } = this.props;

    const isPressed = chosenExercises.some(
      (chosenExercise) => chosenExercise.id === exercise.id,
    );

    return (
      <ItemContainer>
        <ItemImage source={exercise.image} />
        <ExerciseContainer>
          <ExerciseTitle>{exercise.title}</ExerciseTitle>
          <Tags tags={exercise.tags} />
        </ExerciseContainer>
        <TouchableOpacity onPress={() => this.handlePress(exercise, isPressed)}>
          <Checkbox isPressed={isPressed} />
        </TouchableOpacity>
      </ItemContainer>
    );
  }
}

export default ExerciseItem;
