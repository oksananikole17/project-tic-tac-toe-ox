'use strict'

const store = require('../store.js')

const onCreateGameSuccess = function (response) {
  $('#actual-game').show()

  console.log(response)
  store.game = response.game
  return true
}

const onUpdateGameSuccess = function () {
  $('#0').html('Player 1 Move!')
}

export default {
  onCreateGameSuccess,
  onUpdateGameSuccess
}
