import React, { Component } from 'react';
import { SafeAreaView, Text, View, AsyncStorage } from 'react-native';
import styled from 'styled-components/native';
import Button from '../../components/Button';
import Info from '../../components/Info';

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

export class Home extends Component {
  state = {
    workouts: null,
  };

  componentDidMount() {
    this.getWorkouts();
  }

  getWorkouts = async () => {
    const workouts = JSON.parse(await AsyncStorage.getItem('workouts')) || [];
    this.setState({ workouts });
  };

  render() {
    console.log(this.state);
    return (
      <SafeAreaView>
        <Title>Dashboard</Title>
        <InfosContainer>
          <Info number={0} subtitle="workouts completed" />
          <Info number={0} subtitle="workouts completed" unit={'kg'} />
          <Info number={0} subtitle="workouts completed" />
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
