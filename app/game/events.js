'use strict'

const gameApi = require('./api.js')
const gameUi = require('./ui.js').default

// const showGame = function () {
//   console.log('work please')
// }

// if (authUi.onSignInSuccess()) {
//   (function () {
//     console.log('why')
//   })()
// }

const onCreateGame = function (event) {
  event.preventDefault()
  console.log('help')

  // api call
  gameApi
    .createGame()
    .then(() => gameUi.onCreateGameSuccess())
}
module.exports = {
  onCreateGame
}
