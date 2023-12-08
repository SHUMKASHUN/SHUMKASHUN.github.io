# Vue selector
A component selector for Vue

[![Travis](https://img.shields.io/travis/coolzjy/vue-selector.svg?maxAge=2592000)](https://travis-ci.org/coolzjy/vue-selector)
[![npm](https://img.shields.io/npm/v/vue-selector.svg?maxAge=2592000)](https://www.npmjs.com/package/vue-selector)

## How to use
Vue selector is a plugin of Vue, just install it by `Vue.use`
```js
Vue.use(VueSelector)
```

Assert you have a **component tree** like this:
```
Root
 └ ComA
    ├ ComB
    ├ ComC
    │  └ ComD
    └ ComB
```

You can query components just like using css selector and `querySelectorAll` method:
```js
root.$querySelectorAll('ComA ComB')
// get [ComB, ComB]

root.$querySelectorAll('ComA > ComC')
// get [] because ComA have no child ComC

root.$querySelectorAll('ComC + ComB')
// get [ComB(after ComC)]

root.$querySelectorAll('ComA, ComD')
// get [ComA, ComD]
```
`$querySelectorAll` method will search components base on the component call it, that is `ComB.$querySelectorAll('ComD')` will get nothing because there is no ComD belongs to ComB.

Note that component is selected according to it's name, which was given in [component option](http://vuejs.org/api/#name).
