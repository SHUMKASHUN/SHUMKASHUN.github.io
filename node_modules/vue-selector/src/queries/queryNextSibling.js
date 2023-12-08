/**
 * Search a component's next sibling with given name
 *
 * @param {Object} component - Vue component
 * @param {String} name
 * @return {Array}
 */
export default function queryNextSibling (component, name) {
  var parent = component.$parent
  var index = parent.$children.indexOf(component)
  if (parent.$children[index + 1] &&
    parent.$children[index + 1].constructor.name === name) {
    return [parent.$children[index + 1]]
  }
  return []
}
