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
    .then((response) => gameUi.onCreateGameSuccess(response))
}

const onUpdateGame = function (event) {
  event.preventDefault()
  console.log('did it work')

  const box = event.target
  console.log(box)
  const data = $(event.target).data('cell-index')
  console.log(data)

  gameApi
    .updateGame(data)
    .then(() => gameUi.onUpdateGameSuccess())
}

module.exports = {
  onCreateGame,
  onUpdateGame
}
