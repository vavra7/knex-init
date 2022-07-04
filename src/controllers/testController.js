const knex = require("../knex");

exports.test = async (req, res, next) => {
  // Reusing of single instance of knex connection wherever it is needed
  const result = await knex.raw("SELECT 1+1 AS result")
  res.json(result);
};
