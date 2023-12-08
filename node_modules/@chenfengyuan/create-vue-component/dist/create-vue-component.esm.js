/*!
 * create-vue-component v1.1.0
 * https://github.com/fengyuanchen/create-vue-component
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2018-06-28T13:45:18.559Z
 */

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

/**
 * Check if the given value is a non-null object.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a non-null object, else `false`.
 */
function isNonNullObject(value) {
  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null;
}

var _Object$prototype = Object.prototype,
    hasOwnProperty = _Object$prototype.hasOwnProperty,
    toString = _Object$prototype.toString;

/**
 * Check if the given value is a non-empty string.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a non-empty string, else `false`.
 */

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

/**
 * Check if the given value is a plain object.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a plain object, else `false`.
 */
function isPlainObject(value) {
  if (!isNonNullObject(value)) {
    return false;
  }

  try {
    var _constructor = value.constructor;
    var prototype = _constructor.prototype;

    return _constructor && prototype && hasOwnProperty.call(prototype, 'isPrototypeOf');
  } catch (e) {
    return false;
  }
}

/**
 * Check if the given value is a function.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a function, else `false`.
 */
function isFunction(value) {
  return typeof value === 'function';
}

/**
 * Check if the given value is a non-empty array.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a non-empty array, else `false`.
 */
function isNonEmptyArray(value) {
  return Array.isArray(value) && value.length > 0;
}

/**
 * Check if the given value is an element.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is an element, else `false`.
 */
function isElement(value) {
  return isNonNullObject(value) && value.nodeType === 1 && toString.call(value).indexOf('Element') > -1;
}

/**
 * Check if the given value is a valid Vue component.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a valid Vue component, else `false`.
 */
function isVueComponent(value) {
  return isPlainObject(value) && (isNonEmptyString(value.template) || isFunction(value.render) || isNonEmptyString(value.el) || isElement(value.el) || isVueComponent(value.extends) || isNonEmptyArray(value.mixins) && value.mixins.some(function (val) {
    return isVueComponent(val);
  }));
}

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Convert anything to a Vue component.
 * @param {*} content - The content for creating Vue component.
 * @param {Object} options - The options for creating Vue component.
 * @param {string} options.tag - The tag for root element of the created Vue component.
 * @param {*} options.data - The data as the second parameter if the content is a render function.
 * @returns {Object} Return the created Vue component.
 */
function createVueComponent(content) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var component = {};

  if (isVueComponent(content)) {
    component = _extends({}, content);
  } else if (typeof content === 'function') {
    component.render = function render(createElement) {
      return content.call(this, createElement, options.data, this);
    };
  } else {
    var tag = options.tag || 'span';

    // Support HTML content with the `template` property
    component.template = '<' + tag + '>' + content + '</' + tag + '>';
  }

  return component;
}

export default createVueComponent;
