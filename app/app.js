// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')

$(() => {
  $('#actual-game').hide()
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#password-form').on('submit', authEvents.onChangePassword)
  $('#lets-play').on('click', gameEvents.onCreateGame)
  $('#0').on('click', gameEvents.onUpdateGame)
})
