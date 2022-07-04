const _knex = require("knex");

const knex = _knex({
  client: "mysql",
  connection: {
    host: "0.0.0.0",
    port: 3306,
    user: "root",
    password: "example",
    database: "someDb",
  },
});

// Singleton Pattern - export single instance of db connection to be reuse throughout the app
module.exports = knex;
