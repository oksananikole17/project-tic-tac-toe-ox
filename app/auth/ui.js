'use strict'

const store = require('../store.js')

const onSignUpSuccess = function () {
  $('#auth-display').html('<p>Account Created!.</p>')

  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#auth-display').html('<p>Fail</p>')
}

const onSignInSuccess = function (response) {
  $('#lets-play').html('Lets Play')

  $('form').trigger('reset')

  console.log(response)
  store.user = response.user

  return true
}

const onSignInFailure = function () {
  $('#sign-display').html('<p>Fail</p>')

  $('form').trigger('reset')
}

const onChangePasswordSuccess = function () {
  $('#sign-display').html('<p>Password Changed Successfully!</p>')

  $('form').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('#sign-display').html('<p>Fail</p>')
}

export default {
  onSignUpFailure,
  onSignUpSuccess,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordFailure,
  onChangePasswordSuccess
}
