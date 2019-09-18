import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Tag from './Tag';

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

const ExerciseItem = ({ title, image, tags }) => {
  return (
    <ItemContainer>
      <ItemImage source={image} />
      <ExerciseContainer>
        <ExerciseTitle>{title}</ExerciseTitle>
        <TagContainer>
          {tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </TagContainer>
      </ExerciseContainer>
      <TouchableOpacity>
        <Checkbox></Checkbox>
      </TouchableOpacity>
    </ItemContainer>
  );
};

export default ExerciseItem;
