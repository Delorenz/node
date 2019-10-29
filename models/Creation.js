const mongoose = require('mongoose');


const CreationSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    date: {
        type : Date,
        default :Date.now
    },
    image:{
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Creations', CreationSchema);