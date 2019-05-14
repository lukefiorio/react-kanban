exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', (table) => {
    table.increments();
    table.string('title', 255).notNull();
    table.string('body', 1024).notNull();
    table
      .integer('priority_id')
      .notNull()
      .references('id')
      .inTable('priorities')
      .onDelete('CASCADE');
    table
      .integer('status_id')
      .notNull()
      .references('id')
      .inTable('statuses')
      .onDelete('CASCADE');
    table
      .integer('created_by')
      .notNull()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
    table
      .integer('assigned_to')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards');
};
