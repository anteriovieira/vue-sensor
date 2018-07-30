import Sensor from './Sensor.js'
import DSensor from './directives/sensor.js'
import BaseExtension from './extensions/BaseExtension'

import Sendinblue from './extensions/Sendinblue.js'

function plugin (Vue, options = {}) {
  let extensions

  options.extensions.forEach(extension => {
    let ext
    if (typeof extension === 'string') {
      switch (extension) {
        case 'sendinblue':
          ext = new Sendinblue()
          ext.init(options.extensions[extension])
          extensions.push(ext)
          break
        default:
          throw new Error(
            `[vue-sensor] The ${extension} extension was not yet implemented.`
          )
      }
    } else {
      extension.init(options.extensions[extension])
      extensions.push(extension)
    }
  })

  Vue.directive('sensor', DSensor)

  Vue.prototype.$sensor = Vue.$sensor = new Sensor(extensions)

  if (options.router) {
    options.router.afterEach(to => {
      Vue.$sensor.trackView({
        viewName: to.meta.viewName || to.name,
        name: to.name,
        path: to.path,
        fullPath: to.fullPath
      })
    })
  }
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
  BaseExtension,
  version
}
