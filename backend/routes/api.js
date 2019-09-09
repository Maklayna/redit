const passport = require('passport');
const express = require('express');
const fs = require('fs');
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
  console.log(`User ${req.session.passport.user} loged in`);
  res.send(req.session.passport.user);
});
router.post('/logout', auth, (req, res) => {
  req.logout();
  console.log(`User ${req.session.passport.user} loged out`);
  req.session.destroy();

  res.send(true);
});
router.post('/secret', auth, (req, res) => {
  res.send('Ниибацо секретная запись');
});
router.post('/user', auth, (req, res) => {
  console.log(`User ${req.session.passport.user} loged in`);
  res.send(req.session.passport.user);
});
router.post('/images', auth, (req, res) => {
  fs.writeFile('../public/');
  console.log(`User ${req.session.passport.user} loged in`);
  res.send(req.session.passport.user);
});
module.exports = router;
