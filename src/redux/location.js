const initialState = {
  depLocation: { planet_code: 'ERH', planet_name: '지구' },
  arrLocation: { planet_code: 'TO', planet_name: '도착지' },
};

// Action Type
const UPDATEDEP = 'location/UPDATEDEP';
const UPDATEARR = 'location/UPDATEARR';
const CHANGE = 'location/CHANGE';

// Action Creator & Action
export const updateDep = (planet_code, planet_name) => {
  return {
    type: UPDATEDEP,
    planet_code,
    planet_name,
  };
};

export const updateArr = (planet_code, planet_name) => {
  return {
    type: UPDATEARR,
    planet_code,
    planet_name,
  };
};

export const change = () => ({ type: CHANGE });

// Reducer
export default function counter(state = initialState, action) {
  switch (action.type) {
    case UPDATEDEP:
      return {
        ...state,
        depLocation: {
          planet_code: action.planet_code,
          planet_name: action.planet_name,
        },
      };

    case UPDATEARR:
      return {
        ...state,
        arrLocation: {
          planet_code: action.planet_code,
          planet_name: action.planet_name,
        },
      };

    case CHANGE:
      return {
        depLocation: {
          planet_code: state.arrLocation.planet_code,
          planet_name: state.arrLocation.planet_name,
        },
        arrLocation: {
          planet_code: state.depLocation.planet_code,
          planet_name: state.depLocation.planet_name,
        },
      };
    default:
      return state;
  }
}
