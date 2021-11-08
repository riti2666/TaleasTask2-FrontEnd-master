const mongoose = require('mongoose');
const Schema = mongoose.Schema;
autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);

let userSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phones: [{
    type: mongoose.Schema.Types.Number,
    ref: 'Phone',
    required: false
  }],
   username: {
    type: String
  },
   website: {
    type: String
   }

}, {
    collection: 'users'
  })

userSchema.plugin(autoIncrement.plugin, 'User');
module.exports = mongoose.model('User', userSchema)