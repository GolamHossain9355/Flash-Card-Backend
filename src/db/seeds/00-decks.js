const decks = require("../fixtures/decks.json")

exports.seed = function(knex) {
  return knex("decks")
    .del()
    .then(() => knex("decks").insert(decks))
};
