import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import ExerciseList from '../../containers/ExerciseList';
import Header from '../../components/Header';
import { connect } from 'react-redux';
import SetList from '../../containers/SetList';

interface State {
  step: number;
}

class WorkoutCreator extends Component<{}, State> {
  state = {
    step: 1,
  };

  render() {
    let currentPage;

    switch (this.state.step) {
      case 1:
        currentPage = <ExerciseList />;
        break;
      case 2:
        currentPage = <SetList />;
    }

    return (
      <View>
        <Header
          title="Add Exercises"
          subtitle="Workout creation"
          handlePress={() =>
            this.setState((prevState) => ({
              step: prevState.step + 1,
            }))
          }
        />
        {currentPage}
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { workout } = state;
  return { chosenExercises: workout.chosenExercises };
}

export default connect(mapStateToProps)(WorkoutCreator);
