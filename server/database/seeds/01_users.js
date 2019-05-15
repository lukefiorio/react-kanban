'use strict';

const bcrypt = require('bcryptjs');
const saltRounds = 12;

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          first_name: 'Luke',
          last_name: 'Fiorio',
          email: 'luke@yahoo.com',
          password: bcrypt.hashSync('password', saltRounds),
        },
        {
          first_name: 'Brett',
          last_name: 'Matsumoto',
          email: 'brett@yahoo.com',
          password: bcrypt.hashSync('17', saltRounds),
        },
        {
          first_name: 'Frank',
          last_name: 'Heggeness',
          email: 'frank@yahoo.com',
          password: bcrypt.hashSync('frank', saltRounds),
        },
        {
          first_name: 'Brenda',
          last_name: 'Flores',
          email: 'brenda@yahoo.com',
          password: bcrypt.hashSync('brenda', saltRounds),
        },
        {
          first_name: 'Ron',
          last_name: 'Nagata',
          email: 'ron@yahoo.com',
          password: bcrypt.hashSync('ron', saltRounds),
        },
      ]);
    });
};
