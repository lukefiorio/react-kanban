'use strict';

const express = require('express');
const router = express.Router();
const Status = require('../database/models/Status');
// const guard = require('../middleware/guard');
// const userGuard = require('../middleware/userGuard');

router.route('/').get((req, res) => {
  return res.send('Show a list of statuses');
});

router.route('/new').get((req, res) => {
  return res.send('Form to add new status');
});

router.route('/:id').get((req, res) => {
  Status.where({ id: req.params.id })
    .fetch({ withRelated: ['cards'] })
    .then((result) => {
      const status = result.toJSON();
      return res.send(status);
    });
});

router.route('/:id/edit').get((req, res) => {
  return res.send('Form to edit selected status');
});

module.exports = router;
