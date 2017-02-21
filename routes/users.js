var express = require('express');
var router = express.Router();

//sample route

router.get('/', function(req, res, next) {
    res.send("Index page of users");
});
/* create a list of users ["sachin","sehwag","ganguly","dravid","laxman"] and return the JSON String for base_url/users/all
 */

module.exports = router;
