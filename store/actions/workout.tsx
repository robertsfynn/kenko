export const addExercise = (exercise) => ({
  type: 'ADD_EXERCISE',
  exercise,
});

export const removeExercise = (exercise) => ({
  type: 'REMOVE_EXERCISE',
  exercise,
});

export const handleSetChange = (
  text: string,
  setIndex: number,
  name: string,
  exerciseID: number,
) => ({
  type: 'HANDLE_SET_CHANGE',
  text,
  setIndex,
  name,
  exerciseID,
});

export const addSet = (exerciseID: number) => ({
  type: 'ADD_SET',
  exerciseID,
});

export const removeSet = (exerciseID: number) => ({
  type: 'REMOVE_SET',
  exerciseID,
});

export const createWorkout = () => ({
  type: 'CREATE_WORKOUT',
});

export const handleTitleChange = (text) => ({
  type: 'HANDLE_TITLE_CHANGE',
  text,
});
