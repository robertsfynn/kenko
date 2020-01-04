import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Notifications } from 'expo';

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

const Checkbox = styled.View`
  width: 24px;
  height: 24px;
  border: ${(props) =>
    props.isPressed ? '2px solid #40A076' : '2px solid #dfdfe6'};
  border-radius: 2px;

  background-color: ${(props) => (props.isPressed ? '#40A076' : 'white')};
`;

const SetItemText = ({ title, image, sets, exerciseID }) => {
  const [isPressed, setIsPressed] = useState(false);

  const scheduleNotification = async () => {
    Notifications.scheduleLocalNotificationAsync(
      {
        title: 'Next Set',
        body: 'It has been 60 seconds!',
        ios: {
          sound: true,
        },
      },
      {
        time: new Date().getTime() + 5000,
      },
    );
  };

  const finishedSet = () => {
    setIsPressed(true);
    scheduleNotification();
  };

  return (
    <Container>
      <HeaderContainer>
        <SetImage source={image} />
        <Title> {title} </Title>
      </HeaderContainer>
      {sets.map((set, setIndex) => (
        <SetContainer key={setIndex}>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
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
              <NumberText>{set.reps}</NumberText>
              <UnitText>reps</UnitText>
            </View>
            <Multiply>*</Multiply>
            <View>
              <NumberText>{set.kg}</NumberText>
              <UnitText>kg</UnitText>
            </View>
            <TouchableOpacity onPress={finishedSet}>
              <Checkbox isPressed={isPressed} />
            </TouchableOpacity>
          </View>
        </SetContainer>
      ))}
    </Container>
  );
};

export default SetItemText;
