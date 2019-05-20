'use strict';

const express = require('express');
const router = express.Router();
const Card = require('../database/models/Card');
// const guard = require('../middleware/guard');
// const userGuard = require('../middleware/userGuard');

router
  .route('/')
  .get((req, res) => {
    new Card()
      .query((qb) => {
        qb.orderBy('id', 'ASC');
      })
      .fetchAll({ withRelated: ['created_by', 'assigned_to', 'priorities', 'statuses'] })
      .then((result) => {
        const allCards = result.toJSON();
        return res.send(allCards);
      });
  })
  .post((req, res) => {
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
        Card.where({ id: result.id })
          .fetch({ withRelated: ['created_by', 'assigned_to', 'priorities', 'statuses'] })
          .then((result) => {
            const card = result.toJSON();
            return res.json(card);
          });
        // console.log('Successful post');
        // console.log(result);
        // return res.json(result);
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
      created_by: req.body.created_by,
    };

    // known based on user thats logged in
    // updateObj.created_by = req.user.id;

    new Card('id', req.params.id).save(updateObj).then((result) => {
      console.log('Successful edit');
      new Card()
        .query((qb) => {
          qb.orderBy('id', 'ASC');
        })
        .fetchAll({ withRelated: ['created_by', 'assigned_to', 'priorities', 'statuses'] })
        .then((result) => {
          const allCards = result.toJSON();
          return res.send(allCards);
        });
    });
  })
  .delete((req, res) => {
    Card.where({ id: req.params.id })
      .destroy()
      .then((result) => {
        new Card()
          .query((qb) => {
            qb.orderBy('id', 'ASC');
          })
          .fetchAll({ withRelated: ['created_by', 'assigned_to', 'priorities', 'statuses'] })
          .then((result) => {
            const allCards = result.toJSON();
            return res.send(allCards);
          });
      });
  });

router.route('/:id/edit').get((req, res) => {
  return res.send('Form to edit user information');
});

module.exports = router;
