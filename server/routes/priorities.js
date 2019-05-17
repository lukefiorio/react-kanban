'use strict';

const express = require('express');
const router = express.Router();
const Priority = require('../database/models/Priority');
// const guard = require('../middleware/guard');
// const userGuard = require('../middleware/userGuard');

router.route('/').get((req, res) => {
  new Priority().fetchAll().then((result) => {
    const allPriorities = result.toJSON();
    return res.send(allPriorities);
  });
});

router.route('/new').get((req, res) => {
  return res.send('Form to add new Priority');
});

router.route('/:id').get((req, res) => {
  Priority.where({ id: req.params.id })
    .fetch({ withRelated: ['cards'] })
    .then((result) => {
      const priority = result.toJSON();
      return res.send(priority);
    });
});

router.route('/:id/edit').get((req, res) => {
  return res.send('Form to edit selected priority');
});

module.exports = router;
