exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('cards').insert([
        {
          title: 'groceries',
          body: 'Pick up fruits and veggies',
          priority_id: 2,
          status_id: 1,
          created_by: 1,
          assigned_to: 3,
        },
        {
          title: 'laundry',
          body: 'Wash and dry the dirty clothes',
          priority_id: 3,
          status_id: 2,
          created_by: 1,
          assigned_to: 2,
        },
        {
          title: 'dinner',
          body: 'prepare food for 5',
          priority_id: 1,
          status_id: 1,
          created_by: 2,
          assigned_to: 1,
        },
        {
          title: 'dishes',
          body: 'Clean the dishes',
          priority_id: 4,
          status_id: 3,
          created_by: 5,
          assigned_to: 4,
        },
      ]);
    });
};
