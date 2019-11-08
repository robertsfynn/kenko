import React, { Component } from 'react';
import { Text, SafeAreaView } from 'react-native';

class WorkoutStarter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workout: this.props.navigation.getParam('workout'),
    };
  }

  render() {
    const { workout } = this.state;
    console.log(typeof this.state.workout);
    return (
      <SafeAreaView>
        <Text> {workout.title} </Text>
      </SafeAreaView>
    );
  }
}

export default WorkoutStarter;
