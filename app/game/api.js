'use strict'

const store = require('../store.js')

const createGame = function () {
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-api-development.herokuapp.com/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const updateGame = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: 'https://tic-tac-toe-api-development.herokuapp.com/games/ + store.game.id',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}
module.exports = {
  createGame,
  updateGame
}
