exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('first_name', 100).notNull();
    table.string('last_name', 100).notNull();
    table.string('email', 100).notNull();
    table.string('password', 100).notNull();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
