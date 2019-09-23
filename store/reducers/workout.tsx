const initalState = {
  chosenExercises: [],
  sets: [],
};

const workout = (state = initalState, action) => {
  switch (action.type) {
    case 'ADD_EXERCISE':
      return {
        ...state,
        chosenExercises: [...state.chosenExercises, action.exercise],
      };
    case 'REMOVE_EXERCISE':
      return {
        ...state,
        chosenExercises: state.chosenExercises.filter(
          (el) => el.id !== action.exercise.id,
        ),
      };
    case 'ADD_SET':
      return {
        ...state,
        sets: [...state.sets, action.set],
      };
    case 'REMOVE_SET':
      return {
        ...state,
        sets: state.sets.slice(0, -1),
      };
    default:
      return state;
  }
};

export default workout;
