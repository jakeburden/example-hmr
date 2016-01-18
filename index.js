// const ud = require('ud')
const work = require('webworkify')
const main = require('main-loop')
const vdom = require('virtual-dom')
const worker = work(require('./app/worker.thread.js'))
const app = require('./app/index')(worker)
const loop = main({ n: 0 }, app, vdom)
document.body.appendChild(loop.target)
loop.update(loop.state)

worker.onmessage = ({data}) => {
  const state = data
  loop.update(state)
}

/*
 *
 * rough stuff but it works *
import vdom from 'virtual-dom'
import main from 'main-loop'
var ud = require('ud')

import style from './styles/main.js'

const h = vdom.h

var app = ud.defn(module, function app (state) {
  return h('main', style.main, [
    h('h1', [`clicked ${state.n} times`]),
    h('button', {
     onclick: () => {
       loop.update({
         n: state.n + 1
       })
     }
    }, ['click me!'])
  ])
}
)

var loop = ud.defonce(module, () => {
var loop = main({ n: 0 }, app, vdom)
document.body.appendChild(loop.target)
return loop
})
loop.update(loop.state)
console.log(style)
*/
