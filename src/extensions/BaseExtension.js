export default class BaseExtension {

  constructor(name, config = {}) {
    this.name = name
    this.config = config
  }

  install(fn) {
    const source = `;(${fn.toString()})(window)`;
    const script = document.createElement('script');

    script.type = 'text/javascript';
    script.textContent = source;
    script.async = true;
    document.documentElement.appendChild(script);
    script.parentNode.removeChild(script);
  }

  trackView () { }

  trackEvent () { }

  trackException () { }

  trackTiming () { }

  setAlias () { }

  identify () { }

  setUsername () { }

  setUserProperties () { }

  setUserPropertiesOnce () { }

  incrementUserProperties () { }

  setSuperProperties () { }

  setSuperPropertiesOnce () { }

  ecommerceTrackEvent () { }

  addTransaction () {}

  addItem () {}

  trackTransaction () {}

  clearTransactions () {}

  reset () {}
}
