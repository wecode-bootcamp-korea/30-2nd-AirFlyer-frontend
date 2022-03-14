import { combineReducers } from 'redux';
import isModalOpen from './isModalOpen';
import modalInfo from './modalInfo';
import counter from './counter';
import location from './location';
import date from './date';
import totalFare from './totalFare';
import ticketInfo from './ticketInfo';

const rootReducer = combineReducers({
  isModalOpen,
  modalInfo,
  counter,
  location,
  date,
  totalFare,
  ticketInfo,
});

export default rootReducer;
