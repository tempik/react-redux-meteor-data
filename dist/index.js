'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = connectMeteor;

var _reactRedux = require('react-redux');

var _reactMeteorData = require('react-meteor-data');

function connectMeteor(mapTrackerToProps) {
  for (var _len = arguments.length, connectArgs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    connectArgs[_key - 1] = arguments[_key];
  }

  return function (component) {
    var meteorDataHOC = (0, _reactMeteorData.createContainer)(mapTrackerToProps, component);
    return _reactRedux.connect.apply(undefined, connectArgs)(meteorDataHOC);
  };
}