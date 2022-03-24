'use strict'

// const store = require('../store.js')

const onCreateGameSuccess = function () {
  $('#actual-game').html(`<h2>Lets Play!!</h2>
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-lg-3 box alt-color">X</div>
            <div class="col-md-4 col-lg-3 box alt-color">O</div>
            <div class="col-md-4 col-lg-3 box alt-color">X</div>
            <div class="col-md-4 col-lg-3 box alt-color">O</div>
            <div class="col-md-4 col-lg-6 box alt-color">X</div>
            <div class="col-md-4 col-lg-6 box alt-color">O</div>
            <div class="col-md-4 col-lg-6 box alt-color">X</div>
            <div class="col-md-4 col-lg-6 box alt-color">O</div>
            <div class="col-md-4 col-lg-12 box alt-color">X</div>
            </div>
            </div>`)
}

export default {
  onCreateGameSuccess
}
