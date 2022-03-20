const initialState = {
  isModalOpen: false,
};

// Action Type
const OPEN = 'isModalOpen/OPEN';
const CLOSE = 'isModalOpen/CLOSE';

// Action Creator & Action
export const open = () => {
  return {
    type: OPEN,
  };
};

export const close = () => {
  return {
    type: CLOSE,
  };
};

// Reducer
export default function counter(state = initialState, action) {
  switch (action.type) {
    case OPEN:
      return { isModalOpen: true };
    case CLOSE:
      return { isModalOpen: false };
    default:
      return state;
  }
}
