// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')

$(() => {
  $('#new-game').hide()
  $('#actual-game').hide()
  $('#reset-game').hide()
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#password-form').on('submit', authEvents.onChangePassword)
  $('#new-game').on('click', gameEvents.onCreateGame)
  // $('#which-game').on('click', gameEvents.onIndexGame)
  $('#actual-game').on('click', gameEvents.onUpdateGame)
  $('.box').on('click', gameEvents.emptyString)
  $('.box').on('click', gameEvents.switchPlayer)
  $('#reset-game').on('click', gameEvents.resetGame)
  $('#reset-game').on('click', gameEvents.onCreateGame)
})
