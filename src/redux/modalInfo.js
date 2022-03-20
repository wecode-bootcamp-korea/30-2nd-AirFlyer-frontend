const initialState = {
  depLocation: false,
  arrLocation: false,
  date: false,
  passenger: false,
  title: '',
};

// Action Type
const UPDATE = 'location/UPDATE';
const RESET = 'location/RESET';

// Action Creator & Action
export const update = obj => {
  return {
    type: UPDATE,
    obj: obj,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};

// Reducer
export default function counter(state = initialState, action) {
  switch (action.type) {
    case UPDATE:
      return { ...state, ...action.obj };

    case RESET:
      return {
        depLocation: false,
        arrLocation: false,
        date: false,
        passenger: false,
        title: '',
      };

    default:
      return state;
  }
}
