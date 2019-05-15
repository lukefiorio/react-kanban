'use strict';

const express = require('express');
const router = express.Router();
const User = require('../database/models/User');
// const guard = require('../middleware/guard');
// const userGuard = require('../middleware/userGuard');

router.route('/').get((req, res) => {
  new User().fetchAll().then((result) => {
    const allUsers = result.toJSON();
    return res.send(allUsers);
  });
});

router.route('/new').get((req, res) => {
  return res.send('Form to add new user');
});

router.route('/:id').get((req, res) => {
  User.where({ id: req.params.id })
    .fetch({ withRelated: ['created_cards', 'assigned_cards'] })
    .then((result) => {
      const user = result.toJSON();
      return res.send(user);
    });
});

router.route('/:id/edit').get((req, res) => {
  return res.send('Form to edit user information');
});

module.exports = router;
