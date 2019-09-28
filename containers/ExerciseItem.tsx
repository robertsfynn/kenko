import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { Tags } from '../components/Tags';
import { addExercise, removeExercise } from '../store/actions';

const ItemContainer = styled.View`
  align-items: center;
  flex-direction: row;
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

const ExerciseItem = ({
  chosenExercises,
  exercise,
  addExercise,
  removeExercise,
}: Props) => {
  const handlePress = (exercise: Exercise, isPressed: boolean) => {
    !isPressed ? addExercise(exercise) : removeExercise(exercise);
  };

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
      <TouchableOpacity
        onPress={() => handlePress(exercise, isPressed)}
        style={{ padding: 20 }}
      >
        <Checkbox isPressed={isPressed} />
      </TouchableOpacity>
    </ItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addExercise: (exercise) => dispatch(addExercise(exercise)),
  removeExercise: (exercise) => dispatch(removeExercise(exercise)),
});

export default connect(
  null,
  mapDispatchToProps,
)(ExerciseItem);
