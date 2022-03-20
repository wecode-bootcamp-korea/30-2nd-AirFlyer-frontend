const initialState = { count: 1 };

// Action Type
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const UPDATE = 'counter/UPDATE';

// Action Creator & Action
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const update = value => ({ type: UPDATE, value: value });

// Reducer
// FIXME: if문 추가하면 왜 break; 가 필요한지
export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      if (state.count > 0) return { count: state.count - 1 };
      break;
    case UPDATE:
      if (typeof action.value !== Number) {
        return { count: 0 };
      } else if (state.count >= 0) {
        return { count: Number(action.value) };
      }
      break;
    default:
      return state;
  }
}
