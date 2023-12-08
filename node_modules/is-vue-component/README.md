# is-vue-component

[![Build Status](https://img.shields.io/travis/fengyuanchen/is-vue-component.svg)](https://travis-ci.org/fengyuanchen/is-vue-component) [![Downloads](https://img.shields.io/npm/dm/is-vue-component.svg)](https://www.npmjs.com/package/is-vue-component) [![Version](https://img.shields.io/npm/v/is-vue-component.svg)](https://www.npmjs.com/package/is-vue-component)

> Check if the given value is a valid Vue component.

**What is a valid Vue component?**

1. It is a plain object.
2. It has at least one of the following properties:
    - `el`: a non-empty string or an `Element`.
    - `template`: a non-empty string.
    - `render`: a function.
    - `extends`: a valid Vue component.
    - `mixins`: an array includes at least a valid Vue component.

## Main

```text
dist/
├── is-vue-component.js        (UMD)
├── is-vue-component.min.js    (UMD, compressed)
├── is-vue-component.common.js (CommonJS, default)
└── is-vue-component.esm.js    (ES Module)
```

## Install

```shell
npm install is-vue-component
```

## Usage

```html
<div id="app"></div>
```

```js
import isVueComponent from 'is-vue-component';

isVueComponent({
  el: '#app',
});
// > true

isVueComponent({
  el: document.getElementById('app'),
});
// > true

isVueComponent({
  template: '<p>Hello, World!</p>',
});
// > true

isVueComponent({
  render(createElement) {
    return createElement('p', 'Hello, World!');
  },
});
// > true

isVueComponent({
  extends: {
    render(createElement) {
      return createElement('p', 'Hello, World!');
    },
  },
});
// > true

isVueComponent({
  mixins: [
    {
      render(createElement) {
        return createElement('p', 'Hello, World!');
      },
    },
  ],
});
// > true

isVueComponent({});
// > false
```

## License

[MIT](http://opensource.org/licenses/MIT) © [Chen Fengyuan](http://chenfengyuan.com)
