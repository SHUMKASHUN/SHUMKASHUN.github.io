import query from './queries/index.js'

export default {
  install: function (Vue) {
    Vue.prototype.$querySelectorAll = function (selector) {
      return query(this, selector)
    }
  }
}
