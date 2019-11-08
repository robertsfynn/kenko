import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Header from '../../components/Header';
import SetItem from '../../containers/SetItem';

const Container = styled.View`
  padding: 0 20px;
`;

class WorkoutStarter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  tick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  secondsToMinutes = (seconds) =>
    Math.floor(seconds / 60) + ':' + ('0' + Math.floor(seconds % 60)).slice(-2);

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
          nextActive={true}
        />
        <Text>{this.secondsToMinutes(this.state.counter)}</Text>
        <View style={{ flex: 1 }}>
          <ScrollView scrollIndicatorInsets={{ right: 1 }}>
            <Container>
              {workout.chosenExercises.map((exercise) => (
                <SetItem
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
