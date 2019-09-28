import React, { Component } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styled from 'styled-components/native';
import Button from '../../components/Button';

const Title = styled.Text`
  font-family: Rubik-Medium;
  font-size: 30px;
  line-height: 41px;
  /* identical to box height, or 137% */

  color: #26262b;
`;

const InfosContainer = styled.View`
  flex-direction: row;
`;

const Info = styled.View`
  flex: 1;
  padding: 15px;
  border: 1px solid #dfdfe6;
  border-left-width: 0;
  border-right-width: ${({ noRightBorder }) => (noRightBorder ? 0 : '1px')};
`;

const InfoTitle = styled.Text`
  font-family: Questrial;
  font-style: normal;
  font-weight: normal;
  font-size: 29px;
  line-height: 30px;
  /* identical to box height */

  color: #484856;
`;

const InfoSubtitle = styled.Text`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;

  color: rgba(38, 38, 43, 0.7);
`;

export class Home extends Component {
  render() {
    return (
      <SafeAreaView>
        <Title>Dashboard</Title>
        <InfosContainer>
          <Info>
            <InfoTitle>0</InfoTitle>
            <InfoSubtitle>workouts completed</InfoSubtitle>
          </Info>
          <Info>
            <InfoTitle>0</InfoTitle>
            <InfoSubtitle>workouts completed</InfoSubtitle>
          </Info>
          <Info noRightBorder={true}>
            <InfoTitle>0</InfoTitle>
            <InfoSubtitle>workouts completed</InfoSubtitle>
          </Info>
        </InfosContainer>
        <Button
          text="Create Workout"
          onPress={() => this.props.navigation.navigate('WorkoutCreator')}
        />
      </SafeAreaView>
    );
  }
}

export default Home;
