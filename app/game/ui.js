'use strict'

const store = require('../store.js')

const gamesArray = []
const resultsArray = []

const onCreateGameSuccess = function (response) {
  console.log(response)
  store.game = response.game

  $('#actual-game').show()
  $('.index-games').hide()
}

const onUpdateGameSuccess = function (response) {
  $('#switch-player').html('Switch Player!')
  store.games = response.game
  if (store.over === true) {
    gamesArray.push(store.games)
    resultsArray.push(store.result)
  }
  console.log(store.games)
  console.log(resultsArray)
  $('#switch-player').show()
}

const onIndexGameSuccess = function () {
  $('.index-games').show()
  console.log(gamesArray)

  let gamesHtml = ''

  gamesArray.forEach((games) => {
    const gameIndex = gamesArray.indexOf(games)

    const gameWinner = resultsArray[gameIndex]
    console.log(gameWinner)

    gamesHtml += `
                      <div>
                        <ul>
                        <li>
                        <div> Game Number: ${gamesArray.indexOf(games) + 1}</div>
                        <div> Plays: ${games.cells}</div>
                        <div> Player ${gameWinner} </div>
                        </li> 
                        </ul>
                        
                        </div>
                    `
  })

  $('#show-gamesIn').html(gamesHtml)

  $('form').trigger('reset')
}

export default {
  onCreateGameSuccess,
  onIndexGameSuccess,
  onUpdateGameSuccess
}
