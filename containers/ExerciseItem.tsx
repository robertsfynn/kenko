import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Tag from '../components/Tag';

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

const TagContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-self: flex-start;
  width: 75%;
`;

interface Exercise {
  title: string;
  id: number;
  tags: string[];
  image: any;
}

interface Props {
  exercise: Exercise;
  addExercise: (Exercise) => void;
  removeExercise: (Exercise) => void;
}

interface State {
  isPressed: boolean;
}

export default class ExerciseItem extends React.Component<Props, State> {
  state = {
    isPressed: false,
  };

  handlePress = (exercise) => {
    this.setState(
      (prevState) => ({
        isPressed: !prevState.isPressed,
      }),
      () => {
        this.state.isPressed
          ? this.props.addExercise(exercise)
          : this.props.removeExercise(exercise);
      },
    );
  };

  render() {
    const { exercise } = this.props;
    return (
      <ItemContainer>
        <ItemImage source={exercise.image} />
        <ExerciseContainer>
          <ExerciseTitle>{exercise.title}</ExerciseTitle>
          <TagContainer>
            {exercise.tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </TagContainer>
        </ExerciseContainer>
        <TouchableOpacity onPress={() => this.handlePress(exercise)}>
          <Checkbox isPressed={this.state.isPressed}></Checkbox>
        </TouchableOpacity>
      </ItemContainer>
    );
  }
}
