const mongoose = require('mongoose');
const Schema = mongoose.Schema;
autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);

let phoneSchema = new Schema({
    prefix: {
        type: String
    },
    phoneNr: {
        type: Number
    },
    country: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.Number,
        ref: "User"
    }
}, {
    collection: 'phones'
})


phoneSchema.plugin(autoIncrement.plugin, 'Phone');
module.exports = mongoose.model('Phone', phoneSchema)