'use strict'

// const store = require('../store.js')

const onSignUpSuccess = function () {
  $('#auth-display').html('<p>This is basic.</p>')

  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#auth-display').html('<p>Fail</p>')
}

export default {
  onSignUpFailure,
  onSignUpSuccess
}
