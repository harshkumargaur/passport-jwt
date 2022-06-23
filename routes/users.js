const express = require('express');
const router = express.Router();
const passport = require('passport');

const User = require('./../models/user.model');
const genJwt = require('./../utility/genJwt')

/* GET users listing. */
router.post('/register', async (req, res, next) => {
  const user = new User({
    username: req.body.username
  })
  user.genPassword(req.body.password);
  const newUser = await user.save();
  // console.log(newUser.validatePass(req.body.password));
  if (newUser) {
    const token = genJwt(newUser);
    res.status(201).json({
      user,
      token
    })
  } else {
    res.status(500).json({
      msg: 'internal server error'
    })
  }

})

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username });
  if (user) {
    if (user.validatePass(password)) {
      const token = genJwt(user);
      res.status(200).json({
        message: 'login successfull',
        user,
        token
      })

    }
  }

})

router.get('/secret', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.status(200).send('this is secret path');
})

module.exports = router;
