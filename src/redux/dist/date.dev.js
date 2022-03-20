"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = counter;
exports.reset = exports.set = void 0;
var initialState = {
  state: [{
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  }]
}; // Action Type

var SET = 'date/SET';
var RESET = 'date/RESET'; // Action Creator & Action

var set = function set(array) {
  return {
    type: SET,
    array: array
  };
};

exports.set = set;

var reset = function reset() {
  return {
    type: RESET
  };
}; // Reducer


exports.reset = reset;

function counter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET:
      return {
        state: action.array
      };

    case RESET:
      return {
        state: [{
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }]
      };

    default:
      return state;
  }
}