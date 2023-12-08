import isNonNullObject from 'is-non-null-object';

const { hasOwnProperty, toString } = Object.prototype;

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
    const { constructor } = value;
    const { prototype } = constructor;

    return constructor && prototype && hasOwnProperty.call(prototype, 'isPrototypeOf');
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
export default function isVueComponent(value) {
  return isPlainObject(value) && (
    isNonEmptyString(value.template)
    || isFunction(value.render)
    || isNonEmptyString(value.el)
    || isElement(value.el)
    || isVueComponent(value.extends)
    || (isNonEmptyArray(value.mixins) && value.mixins.some(val => isVueComponent(val)))
  );
}
