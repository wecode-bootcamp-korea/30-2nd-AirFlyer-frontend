import { combineReducers } from 'redux';
import isModalOpen from './isModalOpen';
import modalInfo from './modalInfo';
import counter from './counter';
import location from './location';
import date from './date';

const rootReducer = combineReducers({
  isModalOpen,
  modalInfo,
  counter,
  location,
  date,
});

export default rootReducer;
