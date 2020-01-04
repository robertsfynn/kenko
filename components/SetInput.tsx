import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Notifications } from 'expo';

const SetContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin: 20px 0;
`;

const SetText = styled.Text`
  font-family: Rubik;
  font-size: 14px;
  line-height: 16px;
  color: rgba(38, 38, 43, 0.7);
  padding-right: 80px;
  text-transform: uppercase;
`;

const NumberText = styled.Text`
  font-family: Questrial;
  font-size: 29px;
  line-height: 30px;

  color: #484856;
`;

const UnitText = styled.Text`
  font-family: Questrial;
  font-size: 12px;
  line-height: 12px;
  color: #23253a;
  opacity: 0.7;
`;

const Multiply = styled.Text`
  font-family: Questrial;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 29px;
  text-align: center;
  color: #484856;
  opacity: 0.6;
`;

const Input = styled.TextInput`
  font-family: Questrial;
  font-size: 29px;
  line-height: 30px;

  color: #484856;
`;

const SetInput = ({ set, setIndex, handleSetChange, exerciseID }) => {
  return (
    <SetContainer>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <SetText>{`Set ${setIndex + 1}`}</SetText>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <View>
          <Input
            keyboardType="numeric"
            value={set.reps}
            onChangeText={(text) =>
              handleSetChange(text, setIndex, 'reps', exerciseID)
            }
            placeholder="0"
          />
          <UnitText>reps</UnitText>
        </View>
        <Multiply>*</Multiply>
        <View>
          <Input
            keyboardType="numeric"
            value={set.kg}
            onChangeText={(text) =>
              handleSetChange(text, setIndex, 'kg', exerciseID)
            }
            placeholder="0"
          />
          <UnitText>kg</UnitText>
        </View>
      </View>
    </SetContainer>
  );
};

export default SetInput;
