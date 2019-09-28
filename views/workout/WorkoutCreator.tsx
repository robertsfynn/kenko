import React, { Component } from 'react';
import {
  View,
  AsyncStorage,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import Header from '../../components/Header';
import Summary from '../../components/Summary';
import { createWorkout } from '../../store/actions/workout';
import ExerciseItem from '../../containers/ExerciseItem';
import exercises from '../../assets/data/exercises';
import SetItem from '../../containers/SetItem';

interface Exercise {
  title: string;
  id: number;
  tags: string[];
  image: any;
  sets: object[];
}

interface Workout {
  id: string;
  title: string;
  chosenExercises: Exercise[];
}

interface State {
  step: number;
}

interface Props {
  workout: Workout;
  createWorkout: () => void;
}

const Container = styled.View`
  padding: 0 20px;
`;

class WorkoutCreator extends Component<Props, State> {
  state = {
    step: 1,
  };

  componentWillMount() {
    this.props.createWorkout();
  }

  storeWorkout = async () => {
    const { workout } = this.props;

    const currentWorkouts =
      JSON.parse(await AsyncStorage.getItem('workouts')) || [];

    const existingWorkoutIndex = currentWorkouts.findIndex(
      (currentWorkout) => currentWorkout.id === this.props.workout.id,
    );

    let updatedData;

    if (existingWorkoutIndex === -1)
      updatedData = [...currentWorkouts, workout];
    else {
      updatedData = currentWorkouts.map((currentWorkout, index) => {
        if (existingWorkoutIndex !== index) return currentWorkout;
        return { ...currentWorkout, ...workout };
      });
    }

    await AsyncStorage.setItem('workouts', JSON.stringify(updatedData));
  };

  nextStep = () => {
    this.setState((prevState) => ({
      step: prevState.step + 1,
    }));
  };

  prevStep = () => {
    this.setState((prevState) => ({
      step: prevState.step - 1,
    }));
  };

  hasAtLeatOneSet = (exercise: Exercise) => {
    return exercise.sets.length > 0;
  };

  render() {
    let currentPage;
    const { step } = this.state;
    const { workout, navigation } = this.props;

    switch (step) {
      case 1:
        currentPage = (
          <>
            <Header
              title="Add Exercises"
              subtitle="Workout creation"
              handleNext={this.nextStep}
              handleBack={() => navigation.navigate('Home')}
              nextActive={workout.chosenExercises.length > 0}
              nextText="Next"
            />
            <Container>
              {exercises.map((exercise) => (
                <ExerciseItem
                  key={exercise.id}
                  chosenExercises={workout.chosenExercises}
                  exercise={exercise}
                />
              ))}
            </Container>
          </>
        );
        break;
      case 2:
        currentPage = (
          <>
            <Header
              title="Add Sets"
              subtitle="Workout creation"
              handleNext={this.nextStep}
              handleBack={this.prevStep}
              nextActive={workout.chosenExercises.every(this.hasAtLeatOneSet)}
              nextText="Next"
            />
            <KeyboardAvoidingView
              style={{ flex: 1 }}
              behavior="padding"
              enabled
            >
              <ScrollView>
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
            </KeyboardAvoidingView>
          </>
        );
        break;
      case 3:
        currentPage = (
          <>
            <Header
              title="Summary"
              handleNext={this.storeWorkout}
              handleBack={this.prevStep}
              nextActive={!!workout.title}
              workout={workout}
              nextText="Finish"
            />
            <KeyboardAvoidingView
              style={{ flex: 1 }}
              behavior="padding"
              enabled
            >
              <ScrollView>
                <Summary workout={workout} />
              </ScrollView>
            </KeyboardAvoidingView>
          </>
        );
        break;
      default:
        currentPage = null;
    }

    return <View style={{ flex: 1 }}>{currentPage}</View>;
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
