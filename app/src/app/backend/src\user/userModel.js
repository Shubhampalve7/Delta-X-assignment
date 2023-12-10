var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    Date_of_release: {
        type: any,
        required: true
    },
    
    
});
module.exports = mongoose.model('employees', userSchema);


