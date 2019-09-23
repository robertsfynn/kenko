import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  background: #ffffff;
  border: 1px solid #dfdfe6;
  border-radius: 4px;
  margin: 20px 0;
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const BottomContainer = styled.View`
  flex-direction: row;
  border-top-width: 1px;
  border-top-color: #e9eaf2;
`;

const SetContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin: 20px 0;
`;

const SetImage = styled.Image`
  width: 53px;
  height: 53px;
  margin-right: 20px;
`;

const Title = styled.Text`
  font-family: Rubik-Medium;
  font-size: 18px;
  line-height: 22px;
  color: #23253a;
`;

const Button = styled.TouchableOpacity`
  border-right-width: ${(props) => (props.border ? '1px' : '0px')};
  border-right-color: #e9eaf2;
  flex: 1;
`;

const ButtonText = styled.Text`
  font-family: Rubik-Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 20px;
  border-right-width: 1px;
  border-right-color: #e9eaf2;

  color: ${(props) => (props.highlighted ? '#5063EE' : '#26262b')};
`;

const SetText = styled.Text`
  font-family: Rubik;
  font-size: 14px;
  line-height: 16px;
  color: rgba(38, 38, 43, 0.7);
  padding-right: 80px;
  text-transform: uppercase;
`;

const Input = styled.TextInput`
  font-family: Questrial;
  font-size: 29px;
  line-height: 30px;

  color: #484856;
`;

const UnitText = styled.Text`
  font-family: Questrial;
  font-size: 12px;
  line-height: 12px;
  text-align: center;
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

interface State {}

const SetItem = ({
  title,
  image,
  sets,
  exerciseID,
  handleChange,
  addSet,
  removeSet,
}) => (
  <Container>
    <HeaderContainer>
      <SetImage source={image} />
      <Title> {title} </Title>
    </HeaderContainer>
    {sets.map((set, index) => (
      <SetContainer key={index}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <SetText>{`Set ${index + 1}`}</SetText>
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
                handleChange(text, index, 'reps', exerciseID)
              }
            />
            <UnitText>reps</UnitText>
          </View>
          <Multiply>*</Multiply>
          <View>
            <Input
              keyboardType="numeric"
              value={set.kg}
              onChangeText={(text) =>
                handleChange(text, index, 'kg', exerciseID)
              }
            />
            <UnitText>kg</UnitText>
          </View>
        </View>
      </SetContainer>
    ))}
    <BottomContainer>
      <Button border onPress={() => removeSet(exerciseID)}>
        <ButtonText>Remove Set</ButtonText>
      </Button>
      <Button onPress={() => addSet(exerciseID)}>
        <ButtonText highlighted>Add Set</ButtonText>
      </Button>
    </BottomContainer>
  </Container>
);

export default SetItem;
