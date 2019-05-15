'use strict';

const express = require('express');
const router = express.Router();
const Card = require('../database/models/Card');
// const guard = require('../middleware/guard');
// const userGuard = require('../middleware/userGuard');

router.route('/').get((req, res) => {
  new Card().fetchAll({ withRelated: ['created_by', 'assigned_to', 'priorities', 'statuses'] }).then((result) => {
    const allCards = result;
    return res.send(allCards);
  });
});

router.route('/new').get((req, res) => {
  return res.send('Form to add new card');
});

router.route('/:id').get((req, res) => {
  Card.where({ id: req.params.id })
    .fetch({ withRelated: ['created_by', 'assigned_to', 'priorities', 'statuses'] })
    .then((result) => {
      const card = result.toJSON();
      return res.send(card);
    });
});

router.route('/:id/edit').get((req, res) => {
  return res.send('Form to edit user information');
});

module.exports = router;
