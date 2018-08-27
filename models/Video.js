const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Video = new Schema({
    videoLink: {
        type: String,
        required: true,
        trim: true
    },

    journeyId: {
        type:String,
        required:true,
        trim: true
    }
},{
    timestamps: true
    })

module.exports = mongoose.model('Video', Video);