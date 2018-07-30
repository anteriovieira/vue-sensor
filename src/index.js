import Sensor from './Sensor.js'
import DSensor from './directives/sensor'

import Mixpanel from './extensions/Mixpanel'

function plugin (Vue, options = {}) {
  let extensions

  for (extension of options.extensions) {
    if (typeof extension === 'string') {
      switch (extension) {
        case 'mixpanel':
          ext = new Mixpanel()
          ext.init(options.extensions[extension])
          extensions.push(ext)
          break
        default:
          throw new Error(
            `[vue-sensor] The ${extension} extension was not yet implemented.`
          )
          break
      }
    } else {
      extension.init(options.extensions[extension])
      extensions.push(extension)
    }
  }

  Vue.directive('sensor', DSensor)

  Vue.prototype.$sensor = new Sensor(extensions)
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
