'use stric'

var Location = require('../models/location');

exports.getUserLocation = function(req,res){

	Location.find({_user: req.params.id_usuario}).sort({f_name: 1}).exec(function(err, data){
		res.send({data: data});
	});
}


exports.getUserLocationById = function(req,res,next){
	
	User.findOne({_id:req.params.id,_user:req.params.id_usuario}).exec((err, user) => {
		if(err){
			next({status: 200, message: 'User doesnt exists.'});
		} else {
			if(user)
				res.send(user);
			else{
				next({status: 200, message: 'Error retriving user.'});
			}
		}
	});
	
}

exports.addUserLocation = function(req,res,next){
	var location = new Location();
	Object.keys(req.body).forEach( key=>{
		location[key]=req.body[key];
	})

    location._user= req.params.id_usuario;
	
	location.save( (err, userlocationStored) => {
		if(err){
			console.log(err);
			next({status: 200, message: 'Error saving location'});
		} else {
			if(userlocationStored)
				res.send(userlocationStored);
			else{
				next({status: 200, message: 'Error saving location.'});
			}
		}
	});

}


exports.updateUserLocationById = function(req,res,next){

	var location = {};
	Object.keys(req.body).forEach( (key) => {
		location[key] = req.body[key];
	} );

	Location.findByIdAndUpdate({_id:req.params.id,_user:req.params.id_usuario}, {$set: location}, {new: true} ).exec((err, location) => {
		if(err){
			next({status: 200, message: 'Error updating location.'});
		} else {
			if(location)
				res.send(location);
			else{
				next({status: 200, message: 'Error updating location.'});
			}
		}
	});
	
}


exports.deleteUserLocationById = function(req,res,next){
	
	Location.findOneAndDelete({_id:req.params.id,_user:req.params.id_usuario}, (err, locationRemoved) => {
		if(err){
			next({status: 200, message: 'User Location doesnt exists.'});
		} else {
			if(locationRemoved)
				res.send(locationRemoved);
			else{
				next({status: 200, message: 'Error deleting location.'});
			}
		}
	});
	
}
