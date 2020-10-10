var express = require('express');
var router = express.Router();
const UserService = require('../services/users');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.options('*', function(req, res) {
	res.send(200);
});

router.get('/id', (req, res) => {
  var uniqid = require('uniqid');
  res.json({ id: uniqid() })
})

router.get('/user', (req, res) => {
	const {id} = req.params;
	var user = UserService.getUserById();
  res.send(user)
})

router.post('/user', (req, res) => {
	const {id, email, name} = req.params;
	UserService.createUser(
		req.body.id,
		req.body.firstName,
		req.body.lastName,
		req.body.email
	);
  res.sendStatus(200)
})

module.exports = router;
