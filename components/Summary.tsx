import React from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import styled from 'styled-components/native';
import { PurpleTags } from 'components/Tags';
import { connect } from 'react-redux';
import Button from './Button';
import { handleTitleChange } from '../store/actions/workout';

const InputContainer = styled.View`
  background-color: #2f325a;
  padding: 0 20px 30px 20px;
  margin-top: -20px;
`;

const InputLabel = styled.Text`
  font-family: Questrial;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  color: rgba(254, 254, 254, 0.6);
  margin-bottom: 6px;
`;

const Input = styled.TextInput`
  font-family: Rubik;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
  padding-bottom: 15px;
  border-bottom-color: #5063ee;
  border-bottom-width: 1px;
`;

const Summary = ({ workout, handleTitleChange }) => {
  return (
    <InputContainer>
      <InputLabel>Workout name</InputLabel>
      <Input
        value={workout.title}
        onChangeText={(text) => handleTitleChange(text)}
      />
    </InputContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleTitleChange: (text) => dispatch(handleTitleChange(text)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Summary);
