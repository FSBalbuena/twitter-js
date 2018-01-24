const express=require('express')
const router=express.Router()
const twBank = require('../tweetBank.js');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});
module.exports = router;