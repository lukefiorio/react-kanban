'use strict';

const express = require('express');
const router = express.Router();
const Card = require('../database/models/Card');
// const guard = require('../middleware/guard');
// const userGuard = require('../middleware/userGuard');

router
  .route('/')
  .get((req, res) => {
    new Card().fetchAll({ withRelated: ['created_by', 'assigned_to', 'priorities', 'statuses'] }).then((result) => {
      const allCards = result.toJSON();
      return res.send(allCards);
    });
  })
  .post((req, res) => {
    console.log('************** body:', req.body);
    // console.log('************** req:', req);
    new Card()
      .save({
        title: req.body.title,
        body: req.body.body,
        priority_id: req.body.priority_id,
        status_id: req.body.status_id,
        created_by: req.body.created_by,
        assigned_to: req.body.assigned_to,
      })
      .then((result) => {
        console.log('Successful post');
        return res.json(result);
        // return res.redirect('/api/cards');
      })
      .catch((err) => {
        console.log('error:', err);
      });
  });

router.route('/new').get((req, res) => {
  return res.send('Form to add new card');
});

router
  .route('/:id')
  .get((req, res) => {
    Card.where({ id: req.params.id })
      .fetch({ withRelated: ['created_by', 'assigned_to', 'priorities', 'statuses'] })
      .then((result) => {
        const card = result.toJSON();
        return res.send(card);
      });
  })
  .put((req, res) => {
    let updateObj = {
      title: req.body.title,
      body: req.body.body,
      priority_id: req.body.priority_id,
      status_id: req.body.status_id,
      assigned_to: req.body.assigned_to,
    };

    // known based on user thats logged in
    updateObj.created_by = req.user.id;

    new Card('id', req.params.id).save(updateObj).then((result) => {
      console.log('Successful edit');
      return res.redirect(`/api/cards/${req.params.id}`);
    });
  })
  .delete((req, res) => {
    Card.where({ id: req.params.id })
      .destroy()
      .then((result) => {
        return res.redirect('/api/cards');
      });
  });

router.route('/:id/edit').get((req, res) => {
  return res.send('Form to edit user information');
});

module.exports = router;
