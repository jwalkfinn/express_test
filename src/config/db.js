const Sequelize = require('sequelize');
const sequelizeInst = new Sequelize('postgres', '', '', {
  host: 'localhost',
  dialect: 'postgres'
});

// Database
// const pg = require('pg');
// const cs = 'postgres://localhost:5432/postgres';
// const client = new pg.Client(cs);
// client.connect();

sequelizeInst
  .authenticate()
  .catch((err) => {
    console.log('Unable to connect to the database:', err);
  });

module.exports = sequelizeInst;
