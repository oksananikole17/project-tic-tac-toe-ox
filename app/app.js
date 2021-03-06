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
  $('#index-game').hide()
  $('.index-games').hide()
  $('#show-gamesIn').hide()
  $('#show-game-form').hide()
  $('#sign-out').hide()
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#password-form').on('submit', authEvents.onChangePassword)
  $('#new-game').on('click', gameEvents.onCreateGame)
  $('#new-game').on('click', gameEvents.resetGame)
  // $('#which-game').on('click', gameEvents.onIndexGame)
  $('#actual-game').on('click', gameEvents.onUpdateGame)
  $('.box').on('click', gameEvents.emptyString)
  // $('.box').on('click', gameEvents.switchPlayer)
  $('#reset-game').on('click', gameEvents.resetGame)
  $('#reset-game').on('click', gameEvents.onCreateGame)
  $('#index-game').on('click', gameEvents.onIndexGame)
  $('#show-game-form').on('submit', gameEvents.onShowGame)
})
