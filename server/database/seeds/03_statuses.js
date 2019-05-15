exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('statuses')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('statuses').insert([
        { name: 'to-do', rank: 1 },
        { name: 'in-progress', rank: 2 },
        { name: 'done', rank: 3 },
      ]);
    });
};
