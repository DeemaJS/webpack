'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (message) {

  if (NODE_ENV == 'development') {
    console.log(message);
  }

  alert('Welcome ' + message);
};

;