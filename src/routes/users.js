var express = require('express');
var router = express.Router();
const models = require('../models');

router.options('*', function(req, res) {
	res.send(200);
});

router.get('/id', (req, res) => {
  var uniqid = require('uniqid');
  res.json({ id: uniqid() })
})

router.get('/user', (req, res) => {
	const id = req.query.id;

	models.User.findByPk(id)
    .then(data => {
      res.send(data.toJSON());
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving user with id=" + id
      });
    });
})

router.post('/user', (req, res) => {
	models.User.create({
		id: req.body["id"],
		firstName: req.body["firstName"],
		lastName: req.body["lastName"],
		email: req.body["email"]
	})
		.then(
			res.sendStatus(200)
		)
		.catch(err => {
			res.status(500).send({
				message: "Error retrieving user with id=" + id
			});
		});
})

module.exports = router;
