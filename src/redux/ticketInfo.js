const initialState = {
  state: [
    {
      flight_schedule_id: 1,
      departure_datetime: 'Thu Jan 01 1970 20:00:00 GMT+0900',
      arrival_datetime: 'Thu Jan 01 1970 24:00:00 GMT+0900',
      duration: '4:00',
      seat_type: '이코노미',
      spaceship_name: '초고속우주선',
    },
  ],
};

//Action Type

const SET = 'ticketInfo/SET';

//Action Creator & Action
export const setTicket = array => ({
  type: SET,
  array,
});

// Reducer

export default function ticketInfo(state = initialState, action) {
  switch (action.type) {
    case SET:
      return { state: action.array };
    default:
      return state;
  }
}
