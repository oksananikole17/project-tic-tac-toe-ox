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
  $('#sign-display').html('<p>Signed In!</p>')

  $('form').trigger('reset')

  console.log(response)
  store.user = response.user
}

const onSignInFailure = function () {
  $('#sign-display').html('<p>Fail</p>')
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
