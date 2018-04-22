
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LinkSchema = new Schema(
  {
    reference_tag: {type: String, required: true, max: 100},
    target: {type: String, required: true, max: 100},
    // date_of_x: {type: Date},
    // date_of_y: {type: Date},
  }
);

// Virtual's
// n/a

//Export model
const collection = 'links';
module.exports = mongoose.model('Link', LinkSchema, collection);
