const h = require('virtual-dom/h')
const style = require('../styles/main')

module.exports = worker => state => {
  return h('main', style.main, [
    h('h1', [`clicked ${state.n} times`]),
    h('button', {
      onclick () {
        worker.postMessage({
          type: 'increment'
        })
      }
    }, ['click me!'])
  ])
}

