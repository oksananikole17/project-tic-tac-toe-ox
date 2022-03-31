/* eslint-disable no-tabs */
'use strict'

const gameApi = require('./api.js')
const gameUi = require('./ui.js').default
const store = require('../store.js')

const onCreateGame = function (event) {
  store.over = false
  store.cells = []
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
    .then(() => gameUi.onIndexGameSuccess())
}

const onShowGame = function (event) {
  event.preventDefault()
  console.log(event.target)

  const input = $(event.target).serializeArray()
  console.log(input)
  const inputArray = input
  console.log(inputArray)
  const val = inputArray[0].value
  store.value = val
  console.log(store.value)

  // api call
  gameApi
    .showGame()
    .then(() => gameUi.onShowGameSuccess())
}

const gameState = []

const detectWin = function () {
  if (
    gameState[0] === 'X' &&
		gameState[0] === gameState[1] &&
		gameState[1] === gameState[2]
  ) {
    console.log('win')
    $('#done').show()
    $('#done').html('WINNER PLAYER X! Game Over')
    store.over = true
    store.result = 'X won!'
    $('#reset-game').show()
  } else if (
    gameState[3] === 'X' &&
		gameState[3] === gameState[4] &&
		gameState[4] === gameState[5]
  ) {
    console.log('Win')
    store.over = true
    store.result = 'X won!'
    $('#reset-game').show()
    $('#done').show()
    $('#done').html('WINNER PLAYER X! Game Over')
  } else if (
    gameState[6] === 'X' &&
		gameState[6] === gameState[7] &&
		gameState[7] === gameState[8]
  ) {
    console.log('win')
    store.over = true
    store.result = 'X won!'
    $('#done').show()
    $('#done').html('WINNER PLAYER X! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[0] === 'X' &&
		gameState[0] === gameState[3] &&
		gameState[3] === gameState[6]
  ) {
    console.log('win')
    store.over = true
    store.result = 'X won!'
    $('#done').show()
    $('#done').html('WINNER PLAYER X! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[1] === 'X' &&
		gameState[1] === gameState[4] &&
		gameState[4] === gameState[7]
  ) {
    console.log('win')
    store.over = true
    store.result = 'X won!'
    $('#done').show()
    $('#done').html('WINNER PLAYER X! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[2] === 'X' &&
		gameState[2] === gameState[5] &&
		gameState[5] === gameState[8]
  ) {
    console.log('win')
    store.over = true
    store.result = 'X won!'
    $('#done').show()
    $('#done').html('WINNER PLAYER X! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[0] === 'X' &&
		gameState[0] === gameState[4] &&
		gameState[4] === gameState[8]
  ) {
    console.log('win')
    store.over = true
    store.result = 'X won!'
    $('#done').show()
    $('#done').html('WINNER PLAYER X! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[2] === 'X' &&
		gameState[2] === gameState[4] &&
		gameState[4] === gameState[6]
  ) {
    console.log('win')
    store.over = true
    store.result = 'X won!'
    $('#done').show()
    $('#done').html('WINNER PLAYER X! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[0] === 'X' &&
		gameState[0] === gameState[1] &&
		gameState[1] === gameState[2]
  ) {
    console.log('win')
    $('#done').html('WINNER PLAYER X! Game Over')
    $('#done').show()
    store.over = true
    store.result = 'X won!'
    $('#reset-game').show()
  } else if (
    gameState[3] === 'X' &&
		gameState[3] === gameState[4] &&
		gameState[4] === gameState[5]
  ) {
    console.log('Win')
    store.over = true
    store.result = 'X won!'
    $('#reset-game').show()
    $('#done').show()
    $('#done').html('WINNER PLAYER X! Game Over')
  } else if (
    gameState[6] === 'X' &&
		gameState[6] === gameState[7] &&
		gameState[7] === gameState[8]
  ) {
    console.log('win')
    store.over = true
    store.result = 'X won!'
    $('#done').show()
    $('#done').html('WINNER PLAYER X! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[0] === 'X' &&
		gameState[0] === gameState[3] &&
		gameState[3] === gameState[6]
  ) {
    console.log('win')
    store.over = true
    store.result = 'X won!'
    $('#done').show()
    $('#done').html('WINNER PLAYER X! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[1] === 'X' &&
		gameState[1] === gameState[4] &&
		gameState[4] === gameState[7]
  ) {
    console.log('win')
    store.over = true
    store.result = 'X won!'
    $('#done').show()
    $('#done').html('WINNER PLAYER X! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[2] === 'X' &&
		gameState[2] === gameState[5] &&
		gameState[5] === gameState[8]
  ) {
    console.log('win')
    store.over = true
    store.result = 'X won!'
    $('#done').show()
    $('#done').html('WINNER PLAYER X! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[0] === 'X' &&
		gameState[0] === gameState[4] &&
		gameState[4] === gameState[8]
  ) {
    console.log('win')
    store.over = true
    store.result = 'X won!'
    $('#done').show()
    $('#done').html('WINNER PLAYER X! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[2] === 'X' &&
		gameState[2] === gameState[4] &&
		gameState[4] === gameState[6]
  ) {
    console.log('win')
    store.over = true
    store.result = 'X won!'
    $('#done').show()
    $('#done').html('WINNER PLAYER X! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[0] === 'O' &&
		gameState[0] === gameState[1] &&
		gameState[1] === gameState[2]
  ) {
    console.log('win')
    $('#done').show()
    $('#done').html('WINNER PLAYER O! Game Over')
    store.over = true
    store.result = 'O won!'
    $('#reset-game').show()
  } else if (
    gameState[3] === 'O' &&
		gameState[3] === gameState[4] &&
		gameState[4] === gameState[5]
  ) {
    console.log('Win')
    store.over = true
    store.result = 'O won!'
    $('#reset-game').show()
    $('#done').show()
    $('#done').html('WINNER PLAYER O! Game Over')
  } else if (
    gameState[6] === 'O' &&
		gameState[6] === gameState[7] &&
		gameState[7] === gameState[8]
  ) {
    console.log('win')
    store.over = true
    store.result = 'O won!'
    $('#done').show()
    $('#done').html('WINNER PLAYER O! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[0] === 'O' &&
		gameState[0] === gameState[3] &&
		gameState[3] === gameState[6]
  ) {
    console.log('win')
    store.over = true
    store.result = 'O won!'
    $('#done').show()
    $('#done').html('WINNER PLAYER O! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[1] === 'O' &&
		gameState[1] === gameState[4] &&
		gameState[4] === gameState[7]
  ) {
    console.log('win')
    store.over = true
    store.result = 'O won!'
    $('#done').show()
    $('#done').html('WINNER PLAYER O! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[2] === 'O' &&
		gameState[2] === gameState[5] &&
		gameState[5] === gameState[8]
  ) {
    console.log('win')
    store.over = true
    store.result = 'O won!'
    $('#done').show()
    $('#done').html('WINNER PLAYER O! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[0] === 'O' &&
		gameState[0] === gameState[4] &&
		gameState[4] === gameState[8]
  ) {
    console.log('win')
    store.over = true
    store.result = 'O won!'
    $('#done').show()
    $('#done').html('WINNER PLAYER O! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[2] === 'O' &&
		gameState[2] === gameState[4] &&
		gameState[4] === gameState[6]
  ) {
    console.log('win')
    store.over = true
    store.result = 'O won!'
    $('#done').show()
    $('#done').html('WINNER PLAYER O! Game Over')
    $('#reset-game').show()
  } else if (
    gameState[0] === 'O' &&
		gameState[0] === gameState[1] &&
		gameState[1] === gameState[2]
  ) {
    console.log('win')
    $('#done').html('WINNER PLAYER O! Game Over')
    $('#done').show()
    store.over = true
    store.result = 'O won!'
    $('#reset-game').show()
  } else if (
    gameState[3] === 'O' &&
		gameState[3] === gameState[4] &&
		gameState[4] === gameState[5]
  ) {
    console.log('Win')
    store.over = true
    store.result = 'O won!'
    $('#reset-game').show()
    $('#done').show()
    $('#done').html('WINNER PLAYER O! Game Over')
  } else if (
    gameState[6] === 'O' &&
		gameState[6] === gameState[7] &&
		gameState[7] === gameState[8]
  ) {
    console.log('win')
    store.over = true
    store.result = 'O won!'
    $('#done').html('WINNER PLAYER O! Game Over')
    $('#done').show()
    $('#reset-game').show()
  } else if (
    gameState[0] === 'O' &&
		gameState[0] === gameState[3] &&
		gameState[3] === gameState[6]
  ) {
    console.log('win')
    store.over = true
    store.result = 'O won!'
    $('#done').html('WINNER PLAYER O! Game Over')
    $('#done').show()
    $('#reset-game').show()
  } else if (
    gameState[1] === 'O' &&
		gameState[1] === gameState[4] &&
		gameState[4] === gameState[7]
  ) {
    console.log('win')
    store.over = true
    store.result = 'O won!'
    $('#done').html('WINNER PLAYER O! Game Over')
    $('#done').show()
    $('#reset-game').show()
  } else if (
    gameState[2] === 'O' &&
		gameState[2] === gameState[5] &&
		gameState[5] === gameState[8]
  ) {
    console.log('win')
    store.over = true
    store.result = 'O won!'
    $('#done').html('WINNER PLAYER O! Game Over')
    $('#done').show()
    $('#reset-game').show()
  } else if (
    gameState[0] === 'O' &&
		gameState[0] === gameState[4] &&
		gameState[4] === gameState[8]
  ) {
    console.log('win')
    store.over = true
    store.result = 'O won!'
    $('#done').html('WINNER PLAYER 0! Game Over')
    $('#done').show()
    $('#reset-game').show()
  } else if (
    gameState[2] === 'O' &&
		gameState[2] === gameState[4] &&
		gameState[4] === gameState[6]
  ) {
    console.log('win')
    store.over = true
    store.result = 'O won!'
    $('#done').html('WINNER PLAYER O! Game Over')
    $('#done').show()
    $('#reset-game').show()
  } else if (
    gameState.length >= 9 &&
		(gameState[0] === 'X' || gameState[0] === 'O') &&
		(gameState[1] === 'X' || gameState[1] === 'O') &&
		(gameState[2] === 'X' || gameState[2] === 'O') &&
		(gameState[3] === 'X' || gameState[3] === 'O') &&
		(gameState[4] === 'X' || gameState[4] === 'O') &&
		(gameState[5] === 'X' || gameState[5] === 'O') &&
		(gameState[6] === 'X' || gameState[6] === 'O') &&
		(gameState[7] === 'X' || gameState[7] === 'O') &&
		(gameState[8] === 'X' || gameState[8] === 'O')
  ) {
    console.log('tied')
    store.over = true
    store.result = 'Tied!'
    $('#done').html('TIE GAME! Game Over')
    $('#done').show()
    $('#reset-game').show()
  }
}

const emptyString = function (event) {
  event.preventDefault()
  // const currentPlayer= 'X'

  const cellIndex = this.getAttribute('data-cell-index')

  if ($(this).is(':empty')) {
    $(this).html(store.currentPlayer)
    gameState[cellIndex] = store.currentPlayer
    if (store.currentPlayer === 'X') {
      store.currentPlayer = 'O'
    } else if (store.currentPlayer === 'O') {
      store.currentPlayer = 'X'
    }
  } else {
    console.log('You cant go here')
  }
  // console.log(cellIndex)
  // console.log(gameState)

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
    .then((response) => gameUi.onUpdateGameSuccess(response))
}

const resetGame = function () {
  // if (store.over === true) {
  $('.box').html('')
  $('#done').hide()
  $('#switch-player').hide()

  gameState.splice($.inArray('X', gameState), 9)
  gameState.splice($.inArray('O', gameState), 9)
  console.log(gameState)
  // }
}

module.exports = {
  onCreateGame,
  onIndexGame,
  onUpdateGame,
  emptyString,
  detectWin,
  resetGame,
  onShowGame
}
