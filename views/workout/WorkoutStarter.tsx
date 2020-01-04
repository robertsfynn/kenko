import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Header from '../../components/Header';
import SetItemText from '../../components/SetItemText';

const Container = styled.View`
  padding: 0 20px;
`;

class WorkoutStarter extends Component {
  render() {
    const workout = this.props.navigation.getParam('workout');
    return (
      <>
        <Header
          title={workout.title}
          subtitle="In Progress"
          nextText="Finish Workout"
          handleNext={() => {
            console.log('NEXT');
          }}
          handleBack={() => {
            this.props.navigation.navigate('Home');
          }}
          nextActive
        />
        <View style={{ flex: 1 }}>
          <ScrollView scrollIndicatorInsets={{ right: 1 }}>
            <Container>
              {workout.chosenExercises.map((exercise) => (
                <SetItemText
                  title={exercise.title}
                  key={exercise.id}
                  exerciseID={exercise.id}
                  image={exercise.image}
                  sets={exercise.sets}
                />
              ))}
            </Container>
          </ScrollView>
        </View>
      </>
    );
  }
}

export default WorkoutStarter;
