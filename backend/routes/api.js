const passport = require('passport');
const express = require('express');
const User = require('../models/User');
const auth = require('./auth');

const router = express.Router();

router.post('/registration', async (req, res, next) => {
  console.log('registering user');
  const { username, password } = req.body;
  const newUser = new User({ username });
  try {
    await User.register(newUser, password, () => {});
  } catch (err) {
    console.log('error while user register!', err);
    return next(err);
  }
  console.log('user registered!');
  res.send('true');
});
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.send(req.user.username);
});
router.post('/logout', auth, (req, res) => {
  req.logout();
  res.send(true)
});
router.post('/secret', auth, (req, res) => {
  res.send('Ниибацо секретная запись');
});
module.exports = router;
