import isVueComponent from 'is-vue-component';

/**
 * Convert anything to a Vue component.
 * @param {*} content - The content for creating Vue component.
 * @param {Object} options - The options for creating Vue component.
 * @param {string} options.tag - The tag for root element of the created Vue component.
 * @param {*} options.data - The data as the second parameter if the content is a render function.
 * @returns {Object} Return the created Vue component.
 */
export default function createVueComponent(content, options = {}) {
  let component = {};

  if (isVueComponent(content)) {
    component = { ...content };
  } else if (typeof content === 'function') {
    component.render = function render(createElement) {
      return content.call(this, createElement, options.data, this);
    };
  } else {
    const tag = options.tag || 'span';

    // Support HTML content with the `template` property
    component.template = `<${tag}>${content}</${tag}>`;
  }

  return component;
}
