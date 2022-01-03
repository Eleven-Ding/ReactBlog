"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var actionType = _interopRequireWildcard(require("./constants"));

var _immutable = require("immutable");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var defaultState = (0, _immutable.Map)({
  isHidden: false,
  ThemeColor: "#55b59a",
  fontColor: "white",
  HoverColor: "#1890FF" // ThemeColor: "rgb(40,54,70,7)",
  // fontColor: "#B4B9BE",
  // HoverColor: "white",

});

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionType.CHANGE_HEADER_IS_HIDDEN:
      return state.set("isHidden", action.isHidden);

    case actionType.CHANGE_HEADER_BACK_COLOR:
      return state.set("ThemeColor", action.ThemeColor);

    case actionType.CHANGE_HEADER_COLOR:
      return state.set("fontColor", action.fontColor);

    case actionType.CHANGE_HEADER_HOVER_COLOR:
      return state.set("HoverColor", action.HoverColor);

    default:
      return state;
  }
}

var _default = reducer;
exports["default"] = _default;