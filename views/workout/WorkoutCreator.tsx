import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import ExerciseList from '../../containers/ExerciseList';
import Header from '../../components/Header';
import SetList from '../../containers/SetList';
import Summary from '../../components/Summary';

interface Exercise {
  title: string;
  id: number;
  tags: string[];
  image: any;
  sets: object[];
}

interface State {
  step: number;
}

interface Props {
  chosenExercises: Exercise[];
}

class WorkoutCreator extends Component<Props, State> {
  state = {
    step: 1,
  };

  hasAtLeatOneSet = (exercise) => {
    return exercise.sets.length > 0;
  };

  render() {
    let currentPage;
    const { step } = this.state;
    const { chosenExercises } = this.props;

    switch (step) {
      case 1:
        currentPage = (
          <>
            <Header
              title="Add Exercises"
              subtitle="Workout creation"
              handleNext={() =>
                this.setState((prevState) => ({
                  step: prevState.step + 1,
                }))
              }
              nextActive={chosenExercises.length}
            />
            <ExerciseList />
          </>
        );
        break;
      case 2:
        currentPage = (
          <>
            <Header
              title="Add Sets"
              subtitle="Workout creation"
              handleNext={() =>
                this.setState((prevState) => ({
                  step: prevState.step + 1,
                }))
              }
              handleBack={() =>
                this.setState((prevState) => ({
                  step: prevState.step - 1,
                }))
              }
              nextActive={chosenExercises.every(this.hasAtLeatOneSet)}
            />
            <SetList chosenExercises={chosenExercises} />
          </>
        );
        break;
      case 3:
        currentPage = <Summary chosenExercises={chosenExercises} />;
        break;
      default:
        currentPage = null;
    }

    return <View>{currentPage}</View>;
  }
}

const mapStateToProps = (state) => {
  const { workout } = state;
  return { chosenExercises: workout.chosenExercises };
};

export default connect(mapStateToProps)(WorkoutCreator);
