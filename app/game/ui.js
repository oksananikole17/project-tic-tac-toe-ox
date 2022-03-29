'use strict'

const store = require('../store.js')

const onCreateGameSuccess = function (response) {
  console.log(response)
  store.game = response.game
  $('#actual-game').show()
}

// const onIndexGameSuccess = function (response) {

// }

const onUpdateGameSuccess = function () {
  $('#switch-player').html('Switch Player!')
}

export default {
  onCreateGameSuccess,
  // onIndexGameSuccess,
  onUpdateGameSuccess
}
