'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    f_name: {type:String,required:true},
    l_name: {type:String,required:true},
    email: {type:String,required:true, unique : true},
    birth_date: {type:Date,required:true},
    n_user:{type:String,required:true},
    tel:{type:Number},
    devices:[new Schema({
          marca:{type:String,required: true},
          modelo:{type:String,required: true},
          n_serie:{type:String, required: true,unique : true},
          f_asig: {type:Date,required: true},
  
    })],
    
      extra_data: {type: Schema.Types.Mixed},
  
    creted_at: {type:Date,default:Date.now},
    active: {type:Boolean,default:true},
    //_puesto : {type: Schema.ObjectId,ref: "Puesto",required: true},
    _jefe : {type: Schema.ObjectId,ref: "User"},
  });

module.exports = mongoose.model('User',UserSchema);