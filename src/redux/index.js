import { combineReducers } from 'redux';
import counter from './counter';
import location from './location';
import modalInfo from './modalInfo';
import date from './date';

const rootReducer = combineReducers({
  counter,
  location,
  modalInfo,
  date,
});

export default rootReducer;
