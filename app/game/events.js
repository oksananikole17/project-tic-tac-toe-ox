'use strict'

const gameApi = require('./api.js')
const gameUi = require('./ui.js').default
const store = require('../store.js')
// const showGame = function () {
//   console.log('work please')
// }

// if (authUi.onSignInSuccess()) {
//   (function () {
//     console.log('why')
//   })()
// }

const onCreateGame = function (event) {
  store.over = false
  store.cells = ['', '', '', '', '', '', '', '', '']
  store.currentPlayer = 'X'
  event.preventDefault()
  console.log('help')

  // api call
  gameApi
    .createGame()
    .then((response) => gameUi.onCreateGameSuccess(response))
}

const onIndexGame = function (event) {
  event.preventDefault()
  console.log('i am dying')

  // api call
  gameApi
    .indexGame()
    .then((response) => gameUi.onIndexGameSuccess(response))
}
const switchPlayer = function () {
  if (store.currentPlayer === 'X') {
    store.currentPlayer = 'O'
  } else if (store.currentPlayer === 'O') {
    store.currentPlayer = 'X'
  }
}
const gameState = ['', '', '', '', '', '', '', '', '']

const emptyString = function (event) {
  event.preventDefault()
  // const currentPlayer= 'X'

  const cellIndex = (this.getAttribute('data-cell-index'))

  if ($(this).is(':empty')) {
    $(this).html(store.currentPlayer)
    gameState[cellIndex] = store.currentPlayer
  } else {
    console.log('You cant go here')
  }
  console.log(cellIndex)
  console.log(gameState)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  console.log('did it work')

  const data = event.target
  console.log(data)
  const cellIndex = $(event.target).data('cell-index')
  console.log(cellIndex)
  const cellValue = gameState[cellIndex]
  console.log(cellValue)

  gameApi
    .updateGame(cellIndex, cellValue)
    .then(() => gameUi.onUpdateGameSuccess())
}

module.exports = {
  onCreateGame,
  onIndexGame,
  onUpdateGame,
  emptyString,
  switchPlayer
}
