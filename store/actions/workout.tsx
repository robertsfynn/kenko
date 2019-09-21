export const addExercise = (exercise) => ({
  type: 'ADD_EXERCISE',
  exercise,
});

export const removeExercise = (exercise) => ({
  type: 'REMOVE_EXERCISE',
  exercise,
});
