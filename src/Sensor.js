export default class Sensor {
  constructor (extensions) {
    this.extensions = extensions
  }

  trackView (params = {}, excludedExtensions = []) {
    if (!params.viewName) {
      return
    }

    this.extensions.forEach(extension => {
      if (excludedExtensions.indexOf(extension.name) === -1) {
        extension.trackView(params)
      }
    })
  }

  trackEvent (params = {}, excludedExtensions = []) {
    this.extensions.forEach(extension => {
      if (excludedExtensions.indexOf(extension.name) === -1) {
        extension.trackEvent(params)
      }
    })
  }

  ecommerceTrackEvent (params = {}, excludedExtensions = []) {
    this.extensions.forEach(extension => {
      if (excludedExtensions.indexOf(extension.name) === -1) {
        extension.ecommerceTrackEvent(params)
      }
    })
  }

  trackException (params = {}, excludedExtensions = []) {
    this.extensions.forEach(extension => {
      if (excludedExtensions.indexOf(extension.name) === -1) {
        extension.trackException(params)
      }
    })
  }

  trackTiming (params = {}, excludedExtensions = []) {
    this.extensions.forEach(extension => {
      if (excludedExtensions.indexOf(extension.name) === -1) {
        extension.trackTiming(params)
      }
    })
  }

  addTransaction (params = {}, excludedExtensions = []) {
    this.extensions.forEach(extension => {
      if (excludedExtensions.indexOf(extension.name) === -1) {
        extension.addTransaction(params)
      }
    })
  }

  addItem (params = {}, excludedExtensions = []) {
    this.extensions.forEach(extension => {
      if (excludedExtensions.indexOf(extension.name) === -1) {
        extension.addItem(params)
      }
    })
  }

  trackTransaction (excludedExtensions = []) {
    this.extensions.forEach(extension => {
      if (excludedExtensions.indexOf(extension.name) === -1) {
        extension.trackTransaction()
      }
    })
  }

  clearTransactions (excludedExtensions = []) {
    this.extensions.forEach(extension => {
      if (excludedExtensions.indexOf(extension.name) === -1) {
        extension.clearTransactions()
      }
    })
  }

  setUsername (name, excludedExtensions = []) {
    this.extensions.forEach(extension => {
      if (excludedExtensions.indexOf(extension.name) === -1) {
        extension.setUsername(name)
      }
    })
  }

  async setUserProperties (properties = {}, excludedExtensions = []) {
    const extensionsToExecute = this.extensions.filter(extensionToCheck => excludedExtensions.indexOf(extensionToCheck.name) === -1)
    const response = await Promise.all(extensionsToExecute.map(
        extension => {
          return extension.setUserProperties(properties)
        }
      ))
    return response
  }

  async setUserPropertiesOnce (properties = {}, excludedExtensions = []) {
    const extensionsToExecute = this.extensions.filter(extensionToCheck => excludedExtensions.indexOf(extensionToCheck.name) === -1)
    const response = await Promise.all(extensionsToExecute.map(
        extension => {
          return extension.setUserPropertiesOnce(
            properties
          )
        }
      ))
    return response
  }

  setSuperProperties (properties = {}, excludedExtensions = []) {
    this.extensions.forEach(extension => {
      if (excludedExtensions.indexOf(extension.name) === -1) {
        extension.setSuperProperties(properties)
      }
    })
  }

  setSuperPropertiesOnce (properties = {}, excludedExtensions = []) {
    this.extensions.forEach(extension => {
      if (excludedExtensions.indexOf(extension.name) === -1) {
        extension.setSuperPropertiesOnce(properties)
      }
    })
  }

  async identify (params = {}, excludedExtensions = []) {
    const extensionsToExecute = this.extensions.filter(extensionToCheck => excludedExtensions.indexOf(extensionToCheck.name) === -1)
    const response = await Promise.all(extensionsToExecute.map(
        extension => {
          return extension.identify(params)
        }
      ))
    return response
  }

  setAlias (alias, excludedExtensions = []) {
    this.extensions.forEach(extension => {
      if (excludedExtensions.indexOf(extension.name) === -1) {
        extension.setAlias(alias)
      }
    })
  }

  async reset (excludedExtensions = []) {
    const extensionsToExecute = this.extensions.filter(extensionToCheck => excludedExtensions.indexOf(extensionToCheck.name) === -1)
    const response = await Promise.all(extensionsToExecute.map(
        extension => {
          return extension.reset()
        }
      ))
    return response
  }
}
