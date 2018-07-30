import Sensor from './Sensor.js'
import DSensor from './directives/sensor.js'
import BaseExtension from './extensions/BaseExtension'

import Sendinblue from './extensions/Sendinblue.js'

const customExtensions = []
const nativeExtensions = ['sendinblue']

function plugin (Vue, options = {}) {
  const extensions = []

  Object.keys(options.extensions).forEach(extension => {
    let ext
    if (nativeExtensions.includes(extension)) {
      switch (extension) {
        case 'sendinblue':
          ext = new Sendinblue()
          ext.init(options.extensions[extension])
          extensions.push(ext)
          break
      }
    } else if (customExtensions.includes(extension)) {
      ext = customExtensions[extension]
      ext.init(options.extensions[extension])
      extensions.push(ext)
    } else {
      throw new Error(
        `[vue-sensor] The ${extension} extension was not yet implemented.`
      )
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

function use (extension) {
  customExtensions.push(extension)
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
  version,
  use
}
