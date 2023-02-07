exports.up = function (knex) {
  return knex.schema.createTable("decks", (table) => {
    table.increments("deck_id").primary()
    table.string("deck_name");
    table.string("deck_description");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("decks");
};
