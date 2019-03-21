
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function (table) {
      table.increments('id').primary();
      table.string('email').notNull();
      table.string('first_name', 255).notNull();
      table.string('last_name', 255).notNull();
      table.timestamp('date');
      table.unique('email');
    }),
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('users'),
  ]);
};
