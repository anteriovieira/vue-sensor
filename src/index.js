import Sensor from './Sensor.js'

function plugin (Vue, options) {
  Sensor.track = options.trackHandle;

  Vue.directive('sensor', Sensor)
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
const version = '__VERSION__'
// Export all components too
export {
  Sensor,
  version
}
