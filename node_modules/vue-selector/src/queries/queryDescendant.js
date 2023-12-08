function dfs (component, cb) {
  var children = component.$children
  children.forEach(function (child) {
    if (cb) cb(child)
    dfs(child, cb)
  })
}

/**
 * Search a component's descendant with given name
 *
 * @param {Object} component - Vue component
 * @param {String} name
 * @return {Array}
 */
export default function queryDescendant (component, name) {
  var result = []
  dfs(component, function (component) {
    if (component.constructor.name === name) result.push(component)
  })
  return result
}
