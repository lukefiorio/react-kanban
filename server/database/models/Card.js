'use strict';

const bookshelf = require('../bookshelf');

require('./Priority');
class Card extends bookshelf.Model {
  get tableName() {
    return 'cards';
  }

  get hasTimestamps() {
    return true;
  }

  users() {
    return this.belongsTo('User');
  }

  priorities() {
    return this.belongsTo('Priority');
  }

  statuses() {
    return this.belongsTo('Status');
  }
}

module.exports = bookshelf.model('Card', Card);
