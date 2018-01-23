//'use strict';
// commented out 'use strict' because of error, strict is part of template

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _colors = require('material-ui/styles/colors');

//var _colorManipulator = require('material-ui/utils/colorManipulator');

var _spacing = require('material-ui/styles/spacing');

var _spacing2 = _interopRequireDefault(_spacing);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
    spacing: _spacing2.default,
    fontFamily: 'Roboto, sans-serif',
    palette: {

      // canvasColor: '#303030',
      canvasColor: _colors.grey50,
      textColor: _colors.black,
      alternateTextColor: _colors.white,
      secondaryTextColor: _colors.darkOrange400,
      primary1Color: _colors.blueGrey600,
      primary2Color: _colors.blueGrey600,
      // primary3Color: _colors.blueGrey300,
      accent1Color: _colors.blueGrey600,
      accent2Color: _colors.darkOrange400,
      // accent3Color: _colors.darkOrange100,
      borderColor: _colors.blue600,
      // disabledColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.3),
      // pickerHeaderColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.12),
      // clockCircleColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.12)
    },
};
