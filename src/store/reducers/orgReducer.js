export const orgReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case 'FETCH_REPOS':
      return {
        ...state,
        payload,
      };
    default:
      return state;
  }
};
