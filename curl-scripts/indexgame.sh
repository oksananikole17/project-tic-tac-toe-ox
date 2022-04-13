cutable File  11 lines (8 sloc)  195 Bytes
  
#!/bin/sh

API="https://tic-tac-toe-api-production.herokuapp.com"
URL_PATH="/games"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo