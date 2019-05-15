'use strict';

// express
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const urlParser = bodyParser.urlencoded({ extended: false });
// redis
const redis = require('connect-redis')(session);
// passport
const passport = require('passport');
const localStrategy = require('passport-local');
// encryption
const bcrypt = require('bcryptjs');
// override
const methodOverride = require('method-override');

// source data
const cards = require('./routes/cards.js');
const login = require('./routes/login.js');
const logout = require('./routes/logout.js');
const users = require('./routes/users.js');
const priorities = require('./routes/priorities.js');
const statuses = require('./routes/statuses.js');
// const Card = require('./database/models/Card');
// const User = require('./database/models/User');

const app = express();

require('dotenv').config();
const PORT = process.env.EXPRESS_CONTAINER_PORT;

app.use(urlParser);
app.use(cookieParser());
app.use(methodOverride('_method'));

app.use(
  session({
    store: new redis({ url: process.env.REDIS_URL }),
    secret: process.env.REDIS_SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/cards', cards);
app.use('/api/login', login);
app.use('/api/logout', logout);
app.use('/api/users', users);
app.use('/api/statuses', statuses);
app.use('/api/priorities', priorities);

passport.use(
  new localStrategy(function(username, password, done) {
    return new User({ username: username })
      .fetch()
      .then((user) => {
        if (user === null) {
          // bad username
          return done(null, false, { message: 'bad username or password' });
        } else {
          user = user.toJSON();
          bcrypt.compare(password, user.password).then((res) => {
            if (res) {
              return done(null, user);
            } else {
              // bad password
              return done(null, false, { message: 'bad username or password' });
            }
          });
        }
      })
      .catch((err) => {
        console.log('error:', err);
        return done(err);
      });
  }),
);

// create session for user & send cookie
passport.serializeUser(function(user, done) {
  console.log('serializing');
  return done(null, { id: user.id, first_name: user.first_name, last_name: user.last_name, email: user.email });
});

// will fire if session id/user (in session storage) + cookie (user's) && outside of public route
passport.deserializeUser(function(user, done) {
  console.log('deserializing');
  console.log(user);

  return new User({ id: user.id }).fetch().then((user) => {
    user = user.toJSON();
    done(null, {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
    });
  });
});

// home page
// app.get('/', (req, res) => {
//   new Card().fetchAll({ withRelated: ['created_by', 'assigned_to', 'priorities', 'statuses'] }).then((result) => {
//     const allCards = result;
//     return res.send(allCards);
//   });
// });

const server = app.listen(PORT, () => {
  console.log(`Express app is listening on port ${PORT}`);
});
