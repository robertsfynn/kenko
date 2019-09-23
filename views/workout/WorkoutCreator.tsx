import React, { Component } from 'react';
import { View } from 'react-native';
import ExerciseList from '../../containers/ExerciseList';
import Header from '../../components/Header';
import SetList from '../../containers/SetList';
import exercises from '../../assets/data/exercises';

interface Exercise {
  title: string;
  id: number;
  tags: string[];
  image: any;
  sets: object[];
}

interface State {
  step: number;
  chosenExercises: Exercise[];
}

class WorkoutCreator extends Component<{}, State> {
  state = {
    step: 1,
    chosenExercises: [],
  };

  addExercise = (exercise: Exercise) => {
    this.setState((prevState) => ({
      chosenExercises: [...prevState.chosenExercises, exercise],
    }));
  };

  removeExercise = (exercise: Exercise) => {
    this.setState((prevState) => ({
      chosenExercises: prevState.chosenExercises.filter(
        (el) => el.id !== exercise.id,
      ),
    }));
  };

  handleChange = (
    text: string,
    index: number,
    name: string,
    exerciseID: number,
  ) => {
    this.setState((prevState) => {
      const chosenExercises = [...prevState.chosenExercises];

      chosenExercises.forEach((exercise) => {
        if (exercise.id === exerciseID) {
          const sets = [...exercise.sets];
          const set = sets[index];
          set[name] = text;

          exercise.sets = sets;
        }
      });

      return chosenExercises;
    });
  };

  addSet = (exerciseID: number) => {
    this.setState((prevState) => {
      const chosenExercises = [...prevState.chosenExercises];

      chosenExercises.forEach((exercise) => {
        if (exercise.id === exerciseID) {
          const sets = [...exercise.sets, { reps: '0', kg: '0' }];

          exercise.sets = sets;
        }
      });

      return chosenExercises;
    });
  };

  removeSet = (exerciseID: number) => {
    this.setState((prevState) => {
      const chosenExercises = [...prevState.chosenExercises];

      chosenExercises.forEach((exercise) => {
        if (exercise.id === exerciseID) {
          const sets = [...exercise.sets];
          const updatedSets = sets.slice(0, -1);

          exercise.sets = updatedSets;
        }
      });

      return chosenExercises;
    });
  };

  render() {
    let currentPage;
    const { step } = this.state;

    switch (step) {
      case 1:
        currentPage = (
          <ExerciseList
            addExercise={this.addExercise}
            removeExercise={this.removeExercise}
            exercises={exercises}
          />
        );
        break;
      case 2:
        currentPage = (
          <SetList
            chosenExercises={this.state.chosenExercises}
            handleChange={this.handleChange}
            addSet={this.addSet}
            removeSet={this.removeSet}
          />
        );
        break;
      default:
        currentPage = null;
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

export default WorkoutCreator;
