const express = require('express')
const router = express.Router()
const twBank = require('../tweetBank.js');

router.get('/', function (req, res) {
  var tweets = twBank.list();
  res.render('index', {
    tweets: tweets,
    showForm: true

  });
});

router.get('/users/:name', function (req, res) {
  var name = req.params.name;
  var list = twBank.find({
    name: name
  });
  res.render('index', {
    tweets: list,
    showForm: false
  });
});



module.exports = router;