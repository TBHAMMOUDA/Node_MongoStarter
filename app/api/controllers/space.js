const spaceModel = require('../models/space');

module.exports = {
	getById: function(req, res, next) {
		console.log(req.body);
		spaceModel.findById(req.params.spaceId, function(err, space){
			if (err) {
				next(err);
			} else {
				res.json({status:"success", message: "space found!!!", data:{spaces: space}});
			}
		});
	},

	getAll: function(req, res, next) {
		//let spacesList = [];

		spaceModel.find({}, function(err, spaces){
			if (err){
				next(err);
			} else{
			/*	for (let space of spaces) {
					spacesList.push({id: space._id, name: space.name, released_on: space.released_on});
				}
			*/
				res.json({status:"success", message: "spaces list found!!!", data:spaces});
							
			}

		});
	},

	updateById: function(req, res, next) {
		spaceModel.findByIdAndUpdate(req.params.spaceId, req.body, function(err, space){

			if(err)
				next(err);
			else {
				res.json({status:"success", message: "space updated successfully!!!", data:space});
			}
		});
	},

	deleteById: function(req, res, next) {
		spaceModel.findByIdAndRemove(req.params.spaceId, function(err, space){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "space deleted successfully!!!", data:null});
			}
		});
	},

	create: function(req, res, next) {
		spaceModel.create(req.body, function (err, result) {
				  if (err) 
				  	next(err);
				  else
				  	res.json({status: "success", message: "space added successfully!!!", data: result});
				  
				});
	},

}					