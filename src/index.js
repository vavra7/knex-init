const express = require("express");
const router = require("./routes");
const knex = require("./knex");

const app = express();

app.use(router);

// Test connection on app startup 
knex
  .raw("SELECT 1+1 AS result")
  .catch((err) => console.log("DB connection failed!", err));

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
