const knex = require("../db/connections");

function readAllCardsForDeck(deck_id) {
  return knex("cards").where({ deck_id });
}

async function addCards(deck) {
  deck.cards = await readAllCardsForDeck(deck.deck_id);
  return deck;
}

function list() {
  return knex("decks").orderBy("deck_id");
}

function listWithCardsEmbedded() {
  return knex("decks")
    .orderBy("deck_id")
    .then((decks) => Promise.all(decks.map(addCards)));
}

function create(newData) {
  return knex("decks")
    .insert(newData)
    .returning("*")
    .then((resp) => resp[0]);
}

function read(deck_id) {
  return knex("decks")
    .where({ deck_id })
    .first()
    .then(addCards);
}

function update(updatedData, deck_id) {
  return knex("decks")
    .where({ deck_id })
    .update(updatedData)
    .then(() => read(deck_id));
}

function destroy(deck_id) {
  return knex("decks").where({ deck_id }).del();
}

module.exports = {
  list,
  listWithCardsEmbedded,
  create,
  read,
  update,
  delete: destroy,
};
