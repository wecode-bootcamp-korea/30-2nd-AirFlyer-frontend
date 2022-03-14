const initialState = { price: 0 };

//Action Type

const UPDATE = 'totalFare/UPDATE';

//Action Creator & Action
export const updatePrice = value => ({ type: UPDATE, value: value });

// Reducer

export default function totalFare(state = initialState, action) {
  switch (action.type) {
    case UPDATE:
      return { price: Number(action.value) };
    default:
      return state;
  }
}
