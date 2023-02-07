const knex = require("../db/connections");

function list() {
  return knex("cards").orderBy('card_id')//.limit(10).offset(3)
}

function create(newData) {
  return knex("cards")
    .insert(newData)
    .returning("*")
    .then((resp) => resp[0]);
}

function read(card_id) {
  return knex("cards").where({ card_id }).first();
}

function update(updatedData, card_id) {
  return knex("cards")
    .where({ card_id })
    .update(updatedData)
    .then(() => read(card_id));
}

function destroy(card_id) {
  return knex("cards").where({ card_id }).del();
}

module.exports = {
  list,
  create,
  read,
  update,
  delete: destroy,
};
