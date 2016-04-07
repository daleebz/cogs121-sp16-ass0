var Mongoose = require('mongoose');

var MessageSchema = Mongoose.Schema({
    email: 'string',
    content: 'string',
    created: 'date'
});


exports.Message = Mongoose.model('Message', MessageSchema);