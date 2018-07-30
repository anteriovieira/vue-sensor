import BaseExtension from './BaseExtension'

export default class Sendinblue extends BaseExtension {
  constructor () {
    super()

    this.name = 'sendinblue'
  }

  init (config) {
    this.install(window => {
      window.sib = { equeue: [], 'client_key': config.client_key }
      // eslint-disable-next-line
      window.sendinblue = {}; for (var j = ['track', 'identify', 'trackLink', 'page'], i = 0; i < j.length; i++) {(function(k) { window.sendinblue[k] = function() { var arg = Array.prototype.slice.call(arguments);(window.sib[k] || function() { var t = {}; t[k] = arg; window.sib.equeue.push(t);})(arg[0], arg[1], arg[2]);};})(j[i]);}var n = document.createElement('script'),i = document.getElementsByTagName('script')[0]; n.type = 'text/javascript', n.id = 'sendinblue-js', n.async = !0, n.src = 'https://sibautomation.com/sa.js?key=' + window.sib.client_key, i.parentNode.insertBefore(n, i), window.sendinblue.page();
    })
  }

  trackView () {
    console.log(arguments)
  }
}
