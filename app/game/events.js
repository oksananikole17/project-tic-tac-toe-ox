/* eslint-disable no-tabs */
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

// const winningCombinations = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ]

const detectWin = function () {
  if (
    gameState[0] === 'X' &&
		gameState[0] === gameState[1] &&
		gameState[1] === gameState[2]
  ) {
    console.log('win')
    $('#done').html('WINNER PLAYER X! Game Over')
    store.over = true
    $('#reset-game').show()
  } else if (
    gameState[3] === 'X' &&
		gameState[3] === gameState[4] &&
		gameState[4] === gameState[5]
  ) {
    console.log('Win')
    store.over = true
    $('#reset-game').show()
    $('#done').html('WINNER PLAYER X! Game Over')
  } else if (
    gameState[6] === 'X' &&
		gameState[6] === gameState[7] &&
		gameState[7] === gameState[8]
  ) {
    console.log('win')
    store.over = true
    $('#done').html('WINNER PLAYER X! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[0] === 'X' &&
		gameState[0] === gameState[3] &&
		gameState[3] === gameState[6]
  ) {
    console.log('win')
    store.over = true
    $('#done').html('WINNER PLAYER X! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[1] === 'X' &&
		gameState[1] === gameState[4] &&
		gameState[4] === gameState[7]
  ) {
    console.log('win')
    store.over = true
    $('#done').html('WINNER PLAYER X! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[2] === 'X' &&
		gameState[2] === gameState[5] &&
		gameState[5] === gameState[8]
  ) {
    console.log('win')
    store.over = true
    $('#done').html('WINNER PLAYER X! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[0] === 'X' &&
		gameState[0] === gameState[4] &&
		gameState[4] === gameState[8]
  ) {
    console.log('win')
    store.over = true
    $('#done').html('WINNER PLAYER X! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[2] === 'X' &&
		gameState[2] === gameState[4] &&
		gameState[4] === gameState[6]
  ) {
    console.log('win')
    store.over = true
    $('#done').html('WINNER PLAYER X! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[0] === 'X' &&
		gameState[0] === gameState[1] &&
		gameState[1] === gameState[2]
  ) {
    console.log('win')
    $('#done').html('WINNER PLAYER X! Game Over')
    store.over = true
    $('#reset-game').show()
  } else if (
    gameState[3] === 'X' &&
		gameState[3] === gameState[4] &&
		gameState[4] === gameState[5]
  ) {
    console.log('Win')
    store.over = true
    $('#reset-game').show()
    $('#done').html('WINNER PLAYER X! Game Over')
  } else if (
    gameState[6] === 'X' &&
		gameState[6] === gameState[7] &&
		gameState[7] === gameState[8]
  ) {
    console.log('win')
    store.over = true
    $('#done').html('WINNER PLAYER X! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[0] === 'X' &&
		gameState[0] === gameState[3] &&
		gameState[3] === gameState[6]
  ) {
    console.log('win')
    store.over = true
    $('#done').html('WINNER PLAYER X! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[1] === 'X' &&
		gameState[1] === gameState[4] &&
		gameState[4] === gameState[7]
  ) {
    console.log('win')
    store.over = true
    $('#done').html('WINNER PLAYER X! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[2] === 'X' &&
		gameState[2] === gameState[5] &&
		gameState[5] === gameState[8]
  ) {
    console.log('win')
    store.over = true
    $('#done').html('WINNER PLAYER X! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[0] === 'X' &&
		gameState[0] === gameState[4] &&
		gameState[4] === gameState[8]
  ) {
    console.log('win')
    store.over = true
    $('#done').html('WINNER PLAYER X! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[2] === 'X' &&
		gameState[2] === gameState[4] &&
		gameState[4] === gameState[6]
  ) {
    console.log('win')
    store.over = true
    $('#done').html('WINNER PLAYER X! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[0] === 'O' &&
		gameState[0] === gameState[1] &&
		gameState[1] === gameState[2]
  ) {
    console.log('win')
    $('#done').html('WINNER PLAYER O! Game Over')
    store.over = true
    $('#reset-game').show()
  } else if (
    gameState[3] === 'O' &&
		gameState[3] === gameState[4] &&
		gameState[4] === gameState[5]
  ) {
    console.log('Win')
    store.over = true
    $('#reset-game').show()
    $('#done').html('WINNER PLAYER O! Game Over')
  } else if (
    gameState[6] === 'O' &&
		gameState[6] === gameState[7] &&
		gameState[7] === gameState[8]
  ) {
    console.log('win')
    store.over = true
    $('#done').html('WINNER PLAYER O! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[0] === 'O' &&
		gameState[0] === gameState[3] &&
		gameState[3] === gameState[6]
  ) {
    console.log('win')
    store.over = true
    $('#done').html('WINNER PLAYER O! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[1] === 'O' &&
		gameState[1] === gameState[4] &&
		gameState[4] === gameState[7]
  ) {
    console.log('win')
    store.over = true
    $('#done').html('WINNER PLAYER O! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[2] === 'O' &&
		gameState[2] === gameState[5] &&
		gameState[5] === gameState[8]
  ) {
    console.log('win')
    store.over = true
    $('#done').html('WINNER PLAYER O! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[0] === 'O' &&
		gameState[0] === gameState[4] &&
		gameState[4] === gameState[8]
  ) {
    console.log('win')
    store.over = true
    $('#done').html('WINNER PLAYER O! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[2] === 'O' &&
		gameState[2] === gameState[4] &&
		gameState[4] === gameState[6]
  ) {
    console.log('win')
    store.over = true
    $('#done').html('WINNER PLAYER O! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[0] === 'O' &&
		gameState[0] === gameState[1] &&
		gameState[1] === gameState[2]
  ) {
    console.log('win')
    $('#done').html('WINNER PLAYER O! Game Over')
    store.over = true
    $('#reset-game').show()
  } else if (
    gameState[3] === 'O' &&
		gameState[3] === gameState[4] &&
		gameState[4] === gameState[5]
  ) {
    console.log('Win')
    store.over = true
    $('#reset-game').show()
    $('#done').html('WINNER PLAYER O! Game Over')
  } else if (
    gameState[6] === 'O' &&
		gameState[6] === gameState[7] &&
		gameState[7] === gameState[8]
  ) {
    console.log('win')
    store.over = true
    $('#done').html('WINNER PLAYER O! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[0] === 'O' &&
		gameState[0] === gameState[3] &&
		gameState[3] === gameState[6]
  ) {
    console.log('win')
    store.over = true
    $('#done').html('WINNER PLAYER O! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[1] === 'O' &&
		gameState[1] === gameState[4] &&
		gameState[4] === gameState[7]
  ) {
    console.log('win')
    store.over = true
    $('#done').html('WINNER PLAYER O! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[2] === 'O' &&
		gameState[2] === gameState[5] &&
		gameState[5] === gameState[8]
  ) {
    console.log('win')
    store.over = true
    $('#done').html('WINNER PLAYER O! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[0] === 'O' &&
		gameState[0] === gameState[4] &&
		gameState[4] === gameState[8]
  ) {
    console.log('win')
    store.over = true
    $('#done').html('WINNER PLAYER 0! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[2] === 'O' &&
		gameState[2] === gameState[4] &&
		gameState[4] === gameState[6]
  ) {
    console.log('win')
    store.over = true
    $('#done').html('WINNER PLAYER O! Game Over')
    $('#reset-game').show()
  }
}

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

  detectWin()
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
  const gameStatus = store.over

  gameApi
    .updateGame(cellIndex, cellValue, gameStatus)
    .then(() => gameUi.onUpdateGameSuccess())
}

const resetGame = function () {
  if (store.over === true) {
    $('.box').html('')
    $('#done').hide()
    $('#switch-player').hide()
  }
}

// const winningCombinations = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ]

module.exports = {
  onCreateGame,
  onIndexGame,
  onUpdateGame,
  emptyString,
  switchPlayer,
  detectWin,
  resetGame
}
