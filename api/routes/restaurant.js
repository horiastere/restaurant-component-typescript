var express = require('express');
var router = express.Router();

var restaurant = {
  "name": "Burger Island",
  "logo": "https://tazzcdn.akamaized.net/uploads/logo/1a86262f-1b47-441e-b94d-f69ddf29264d.jfif",
  "hero": "https://tazzcdn.akamaized.net/uploads/cover/Screenshot_2021-07-21_at_15.16.55.png"
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(JSON.stringify(restaurant));
});

module.exports = router;
