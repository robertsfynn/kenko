import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import ExerciseList from '../../containers/ExerciseList';
import Header from '../../components/Header';
import SetList from '../../containers/SetList';
import Summary from '../../components/Summary';
import { createWorkout } from '../../store/actions/workout';

interface Exercise {
  title: string;
  id: number;
  tags: string[];
  image: any;
  sets: object[];
}

interface Workout {
  id: string;
  chosenExercises: Exercise[];
}

interface State {
  step: number;
}

interface Props {
  workout: Workout;
  createWorkout: () => void;
}

class WorkoutCreator extends Component<Props, State> {
  state = {
    step: 1,
  };

  componentWillMount() {
    this.props.createWorkout();
  }

  hasAtLeatOneSet = (exercise: Exercise) => {
    return exercise.sets.length > 0;
  };

  getWorkouts = async () => {
    try {
      const currentWorkouts = await AsyncStorage.getItem('workouts');
      console.log(JSON.parse(currentWorkouts));
    } catch (error) {
      // Error saving data
    }
  };

  render() {
    let currentPage;
    const { step } = this.state;
    const { workout } = this.props;
    this.getWorkouts();
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
              nextActive={workout.chosenExercises.length}
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
              nextActive={workout.chosenExercises.every(this.hasAtLeatOneSet)}
            />
            <SetList chosenExercises={workout.chosenExercises} />
          </>
        );
        break;
      case 3:
        currentPage = <Summary workout={workout} />;
        break;
      default:
        currentPage = null;
    }

    return <View>{currentPage}</View>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  createWorkout: () => dispatch(createWorkout()),
});

const mapStateToProps = (state) => {
  const { workout } = state;
  return { workout };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WorkoutCreator);
