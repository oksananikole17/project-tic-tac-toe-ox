'use strict'

const store = require('../store.js')

const gamesArray = []
const resultsArray = []

const onCreateGameSuccess = function (response) {
  console.log(response)
  store.game = response.game

  $('#actual-game').show()
  $('#index-game').show()
  $('#show-gamesIn').show()
  $('.index-games').hide()
}

const onUpdateGameSuccess = function (response) {
  $('#switch-player').html('Player ' + store.currentPlayer + 's Turn')
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
  $('#show-game-form').show()

  $('form').trigger('reset')
}

const onShowGameSuccess = function () {
  const index = store.value - 1
  const gameWinner = resultsArray[index]
  const gameCells = gamesArray[index].cells

  const gamesHtml = `
                    <div>
                    </div> <div> Game Number: ${store.value}</div>
                        <div> Plays: ${gameCells}</div>
                        <div> Player ${gameWinner} </div>
                        </div>`

  $('#find-game').html(gamesHtml)

  $('form').trigger('reset')
}

export default {
  onCreateGameSuccess,
  onIndexGameSuccess,
  onUpdateGameSuccess,
  onShowGameSuccess
}
