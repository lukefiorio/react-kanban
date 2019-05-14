exports.up = function(knex, Promise) {
  return knex.schema.createTable('priorities', (table) => {
    table.increments();
    table.string('name', 100).notNull();
    table.integer('rank').notNull();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('priorities');
};
