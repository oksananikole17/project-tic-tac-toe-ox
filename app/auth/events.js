'use strict'

const authApi = require('./api.js')
const getFormFields = require('../../lib/get-form-fields.js')
const authUi = require('./ui.js').default

const onSignUp = function (event) {
  event.preventDefault()
  console.log('now here')

  // get data from form
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  authApi
    .signUp(data)
    .then(() => authUi.onSignUpSuccess())
    .catch(() => authUi.onSignUpFailure())
}

module.exports = {
  onSignUp
}
