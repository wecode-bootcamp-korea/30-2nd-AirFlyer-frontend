const initialState = {
  state: [
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ],
};

// Action Type
const SET = 'date/SET';
const RESET = 'date/RESET';

// Action Creator & Action
export const set = array => ({
  type: SET,
  array,
});

export const reset = () => ({
  type: RESET,
});

// Reducer
export default function counter(state = initialState, action) {
  switch (action.type) {
    case SET:
      return { state: action.array };
    case RESET:
      return {
        state: [
          {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
          },
        ],
      };
    default:
      return state;
  }
}
