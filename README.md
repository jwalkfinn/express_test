# Database
db config can be found in src/config/config.json

default is development, test for testing

Migration can be run using `NODE_ENV={test, development, production} npx sequelize-cli db:migrate` with the NODE_ENV being whichever DB config you wish to run it for.

# Tests
tests can be run using `npm test`
