# VueSensor

[![npm](https://img.shields.io/npm/v/vue-sensor.svg)](https://www.npmjs.com/package/vue-sensor) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> A Vue.js Plugin

## Installation

```bash
npm install --save vue-sensor
```

## Usage

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import VueSensor from 'vue-sensor'

Vue.use(VueSensor, {
  trackHandle: (e) => {
    // implementation
    
    console.log(e)
  }
})
```

### Browser

```html
<!-- Include after Vue -->
<!-- Local files -->
<script src="vue-sensor/dist/vue-sensor.js"></script>

<!-- From CDN -->
<script src="https://unpkg.com/vue-sensor"></script>
```

## Development

### Launch visual tests

```bash
npm run dev
```

### Launch Karma with coverage

```bash
npm run dev:coverage
```

### Build

Bundle the js and css of to the `dist` folder:

```bash
npm run build
```

## License

[MIT](http://opensource.org/licenses/MIT)
