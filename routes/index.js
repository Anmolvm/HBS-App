var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', ensureAuthenticated, function(req,res){

	// User.getUserByUsername(username, function(err, user){
 //   	if(err) throw err;
 //   	if(!user){
 //   		return done(null,false,{message: 'Unknown User'})
 //   	}

	res.render('index',{name: req.user.name, email: req.user.email});
	// });
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();

	}else{
		req.flash('success_msg','Please log in to continue');
		res.redirect('/users/login');
	}
}
module.exports = router;