var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var User = mongoose.model('User');
var Project = mongoose.model('Project');

/* GET home page. */
router.get('/', function(req, res, next) {
	User.find({}, 'name update', function(err, user){
		res.render('cao', {dates: user});
	})
});
router.post('/', function(req, res, next){
	Project.create({projectName: 'aaa', createBy: '579e112d74ffe22609786dbd'}, function(err, project){
		console.log(err, project);
	})
});
router.get('/project', function(req, res, next) {
	Project.findById('579f77931185246a0a43e31b')
		.populate('createBy')
		.exec(function(err, project){
			console.log(err, project);
		})
});

module.exports = router;
