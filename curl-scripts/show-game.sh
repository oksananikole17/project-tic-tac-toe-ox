#!/bin/sh

API="https://tic-tac-toe-api-production.herokuapp.com"
URL_PATH="/games"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo