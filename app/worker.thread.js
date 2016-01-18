module.exports = self => {
  const state = { n: 0 }

  self.onmessage = ({data}) => {
    const { type } = data

    const events = {
      increment () {
        state.n++
      }
    }

    events[type]()

    self.postMessage(state)
  }
}
