'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LocationSchema = Schema({
    name : {type : String, required: true},
    calle: {type : String, required: true},
    colonia :{type : String, required: true},
    cp:{type : String, required: true},
    ciudad:{type : String, required: true},
    estado:{type : String, required: true},
    pais:{type : String, required: true},
    _user:{type: Schema.ObjectId,ref: "User",required:true},
});

module.exports = mongoose.model('Location',LocationSchema);