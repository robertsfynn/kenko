const initalState = {
  id: null,
  chosenExercises: [],
};

const workout = (state = initalState, action) => {
  switch (action.type) {
    case 'CREATE_WORKOUT':
      const randomID = Math.random()
        .toString(36)
        .substr(2, 9);

      return {
        ...state,
        id: randomID,
      };
    case 'ADD_EXERCISE':
      return {
        ...state,
        chosenExercises: [...state.chosenExercises, action.exercise],
      };
    case 'REMOVE_EXERCISE':
      return {
        ...state,
        chosenExercises: state.chosenExercises.filter(
          (chosenExercise) => chosenExercise.id !== action.exercise.id,
        ),
      };
    case 'HANDLE_SET_CHANGE':
      return {
        ...state,
        chosenExercises: state.chosenExercises.map((exercise) => {
          if (exercise.id !== action.exerciseID) return exercise;

          const updatedSets = exercise.sets.map((set, index) => {
            if (index !== action.setIndex) return set;

            return { ...set, [action.name]: action.text };
          });

          return { ...exercise, sets: updatedSets };
        }),
      };
    case 'ADD_SET':
      return {
        ...state,
        chosenExercises: state.chosenExercises.map((exercise) => {
          if (exercise.id !== action.exerciseID) return exercise;

          return {
            ...exercise,
            sets: [...exercise.sets, { reps: '', kg: '' }],
          };
        }),
      };
    case 'REMOVE_SET':
      return {
        ...state,
        chosenExercises: state.chosenExercises.map((exercise) => {
          if (exercise.id !== action.exerciseID) return exercise;

          return { ...exercise, sets: [...exercise.sets.slice(0, -1)] };
        }),
      };
    default:
      return state;
  }
};

export default workout;
