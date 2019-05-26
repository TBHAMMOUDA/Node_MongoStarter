const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const OfferSchema = new Schema({
	label: {
		type: String,
	},
	created_on: {
		type: Date,
		trim: true,
		default: Date.now,

	},
	updated_on: {
		type: Date,
		trim: true,
		default: Date.now,

	},
	spaces:[{
		ref: 'Space',
		type: Schema.Types.ObjectId,
	  }]
});

var autoPopulate = function(next) {
	this.populate('spaces');
  next();
};

OfferSchema.pre('findOne', autoPopulate).pre('find', autoPopulate);
module.exports = mongoose.model('Offer', OfferSchema)