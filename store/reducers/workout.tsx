const workout = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXERCISE':
      return [...state, action.exercise];
    case 'REMOVE_EXERCISE':
      return state.filter((el) => el.id != action.exercise.id);
    default:
      return state;
  }
};

export default workout;
