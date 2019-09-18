import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import benchPress from 'assets/bodyparts/bench-press.png';
import Tag from './Tag';

const ItemContainer = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
  padding: 0 20px;
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
  border: 2px solid #dfdfe6;
  border-radius: 2px;
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
`;

const ExerciseItem = () => {
  return (
    <ItemContainer>
      <ItemImage source={benchPress} />
      <ExerciseContainer>
        <ExerciseTitle>Bench Press</ExerciseTitle>
        <TagContainer>
          <Tag tag="Chest"></Tag>
          <Tag tag="Triceps"></Tag>
          <Tag tag="Deltoid"></Tag>
          <Tag tag="Chest"></Tag>
          <Tag tag="Chest"></Tag>
          <Tag tag="Chest"></Tag>
        </TagContainer>
      </ExerciseContainer>
      <TouchableOpacity>
        <Checkbox></Checkbox>
      </TouchableOpacity>
    </ItemContainer>
  );
};

export default ExerciseItem;
