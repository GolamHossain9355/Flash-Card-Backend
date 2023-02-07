const cards = require("../fixtures/cards.json")

exports.seed = function(knex) {
  return knex("cards")
    .del()
    .then(() => knex("cards").insert(cards))
};
