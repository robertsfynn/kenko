const initalState = {
  chosenExercises: [],
};

const workout = (state = initalState, action) => {
  switch (action.type) {
    case 'ADD_EXERCISE':
      console.log(state);
      return {
        ...state,
        chosenExercises: [...state.chosenExercises, action.exercise],
      };
    case 'REMOVE_EXERCISE':
      console.log(state);
      return {
        ...state,
        chosenExercises: state.chosenExercises.filter(
          (el) => el.id != action.exercise.id,
        ),
      };
    default:
      return state;
  }
};

export default workout;
